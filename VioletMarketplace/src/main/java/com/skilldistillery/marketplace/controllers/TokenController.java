package com.skilldistillery.marketplace.controllers;

import java.util.Set;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.marketplace.entities.Token;
import com.skilldistillery.marketplace.services.TokenService;

@RestController
@RequestMapping("api")
@CrossOrigin({"*", "http://localhost:4301" })
public class TokenController {
	@Autowired
	private TokenService tokenSvc;
	
	@GetMapping("tokens")
	public Set<Token> index(HttpServletRequest req, HttpServletResponse resp) {
		return tokenSvc.index();
	}
	
	@PostMapping("tokens")
	public Token create(HttpServletRequest req, HttpServletResponse resp, @RequestBody Token token) {
		tokenSvc.create("admin", token);
		if (token == null) {
			resp.setStatus(404);
		}
		return token;
	}
}
