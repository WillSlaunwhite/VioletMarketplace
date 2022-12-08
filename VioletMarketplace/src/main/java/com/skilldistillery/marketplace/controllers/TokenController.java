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
import com.skilldistillery.marketplace.entities.User;
import com.skilldistillery.marketplace.services.AuthService;
import com.skilldistillery.marketplace.services.TokenService;

@RestController
@RequestMapping("api")
@CrossOrigin({"*", "http://localhost:4301" })
public class TokenController {
	@Autowired
	private TokenService tokenSvc;
	@Autowired
	private AuthService authSvc;
	
	
	/////////////// UNAUTH METHODS ///////////////////
	
	
	
//	find non-principal user's tokens index method
	@GetMapping("tokens/user/{username}")
	public Set<Token> indexNonPrincipal(HttpServletRequest req,
			HttpServletResponse resp,
			@PathVariable String username) {
		return tokenSvc.indexByUsername(username);
	}
	
	
	
	/////////////// GET METHODS ///////////////////
	
	
	
//	return all tokens
	@GetMapping("home/tokens")
	public Set<Token> indexHome(HttpServletRequest req,
			HttpServletResponse resp) {
		return tokenSvc.index();
	}
	
//	Get principal's list of tokens
	@GetMapping("tokens/myTokens")
	public Set<Token> indexByUsername(HttpServletRequest req,
			HttpServletResponse resp,
			Principal principal) {
		return tokenSvc.indexByUsername(principal.getName());
	}
	
//	Get a specific token by id
	@GetMapping("tokens/id/{tid}")
	public Token show(HttpServletRequest req,
			HttpServletResponse resp,
			
			@PathVariable int tid) {
		return tokenSvc.showById(tid);
	}
	
	
	
	/////////////// POST METHODS ///////////////////
	
	
	
	@PostMapping("tokens")
	public Token create(HttpServletRequest req,
			HttpServletResponse resp, 
			Principal principal,
			@RequestBody Token token) {
		tokenSvc.create(principal.getName(), token);
		if (token == null) {
			resp.setStatus(404);
		}
		return token;
	}
	
	
	
	/////////////// PUT METHODS ///////////////////
	
	
	
	// method has extra params it probably doesn't need 
	@PutMapping("tokens/{tid}")
	public Token sellMyToken(HttpServletRequest req,
		HttpServletResponse resp,
		Principal principal,
		@PathVariable int tid) {
		Token token = new Token();
		User user = userSvc.getUserByUsername(principal.getName());
		
		token = tokenSvc.showByUsernameId(principal.getName(), tid);

		if (token == null) {
			resp.setStatus(404);
		}
		
		token = tokenSvc.update("admin", "secondUser", tid, token);
		return token;
	}
	
//	@PutMapping("tokens/{tid}")
//	public Token updateMyToken(HttpServletRequest req,
//			HttpServletResponse resp,
//			Principal principal,
//			@PathVariable int tid) {
//		
//		Token token = new Token();
//		token = tokenSvc.show(principal.getName(), tid);
//		
//		if (token == null) {
//			resp.setStatus(404);
//		}
//		
//		token = tokenSvc.update(principal.getName(), tid, token);
//		return token;
//	}
	
	
	
	/////////////// DELETE METHODS ///////////////////
	
	
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
