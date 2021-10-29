package com.skilldistillery.marketplace.controllers;

import java.security.Principal;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
	
	@GetMapping("tokens/{username}")
	public Set<Token> index(HttpServletRequest req,
			HttpServletResponse resp,
			@PathVariable String username) {
		return tokenSvc.index(username);
	}
	
	@GetMapping("tokens/myTokens")
	public Set<Token> index(HttpServletRequest req,
			HttpServletResponse resp,
			Principal principal) {
		return tokenSvc.index(principal.getName());
	}
	
	@PostMapping("tokens")
	public Token create(HttpServletRequest req,
			HttpServletResponse resp,
			@RequestBody Token token) {
		tokenSvc.create("admin", token);
		if (token == null) {
			resp.setStatus(404);
		}
		return token;
	}
	
	
	// method has extra params it probably doesn't need 
	
	@PutMapping("tokens/{tid}")
	public Token update(HttpServletRequest req,
		HttpServletResponse resp,
		@PathVariable int tid) {
		
		Token token = new Token();
		token = tokenSvc.show("admin", tid);

		if (token == null) {
			resp.setStatus(404);
		}
		
		token = tokenSvc.update("admin", "secondUser", tid, token);
		return token;
	}
	
	@DeleteMapping("tokens/{tid}")
	public void destroy(HttpServletRequest req,
		HttpServletResponse resp,
		Principal principal,
		@PathVariable int tid) {

		if (tokenSvc.destroy(principal.getName(), tid)) {
			resp.setStatus(204);
		} else {
			resp.setStatus(404);
		}
	}
	
	
}
