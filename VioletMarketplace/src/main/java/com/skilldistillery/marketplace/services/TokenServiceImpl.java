package com.skilldistillery.marketplace.services;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;

import com.skilldistillery.marketplace.entities.Token;
import com.skilldistillery.marketplace.entities.User;
import com.skilldistillery.marketplace.repositories.TokenRepository;
import com.skilldistillery.marketplace.repositories.UserRepository;

public class TokenServiceImpl implements TokenService {
	@Autowired
	private TokenRepository tokenRepo;
	
	@Autowired
	private UserRepository userRepo;
	
	@Override
	public Set<Token> index() {
		Set<Token> tokens = new HashSet<Token>();
		tokens.addAll(tokenRepo.findByOwner_Username("admin"));
		return tokens;
	}
	
	@Override
	public Token show(String username, int tid) {
		return tokenRepo.findByOwner_UsernameAndId(username, tid);
	}
	
	@Override
	public Token create(String username, Token token) {
		User user = userRepo.findByUsername(username);
		if(user != null) {
			token.setCreator(user);
			token.setOwner(user);
//			token.setCollection(collectionRepo.findById(1))   probably need collection repo
//			token.setTransfers(transferRepo.findAll());       probably need transfer repo
			tokenRepo.saveAndFlush(token);
			return token;
		} else {
			return null;
		}
	}
	
}
