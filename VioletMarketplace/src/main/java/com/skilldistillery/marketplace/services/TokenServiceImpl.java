package com.skilldistillery.marketplace.services;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.marketplace.entities.Token;
import com.skilldistillery.marketplace.entities.User;
import com.skilldistillery.marketplace.repositories.TokenRepository;
import com.skilldistillery.marketplace.repositories.UserRepository;

@Service
public class TokenServiceImpl implements TokenService {
	@Autowired
	private TokenRepository tokenRepo;
	
	@Autowired
	private UserRepository userRepo;
	
	
	@Override
	public Set<Token> index() {
		Set<Token> tokens = new HashSet<Token>();
		tokens.addAll(tokenRepo.findAll());
		return tokens;
	}
	
	@Override
	public Set<Token> indexByUsername(String username) {
		Set<Token> tokens = new HashSet<Token>();
		tokens.addAll(tokenRepo.findByOwner_Username(username));
		return tokens;
	}
	
	@Override
	public Token showByUsernameId(String username, int tid) {
		return tokenRepo.findByOwner_UsernameAndId(username, tid);
	}
	
	@Override
	public Token showById(int tid) {
		return tokenRepo.getById(null);
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
	
	@Override
	public Token update(String ownerName, String buyerName, int tid, Token token) {
		Token existingToken = tokenRepo.findByOwner_UsernameAndId(ownerName, tid);
		User buyer = userRepo.findByUsername(buyerName);
		if(existingToken != null) {
			existingToken.setId(token.getId());
			existingToken.setName(token.getName());
			existingToken.setDescription(token.getDescription());
			existingToken.setOffered(token.isOffered());
			existingToken.setPrice(token.getPrice());
			existingToken.setRarity(token.getRarity());
			existingToken.setReleaseDate(token.getReleaseDate());
			existingToken.setTokenLocation(token.getTokenLocation());
			
			existingToken.setCollection(token.getCollection());
			existingToken.setTransfers(token.getTransfers());
			existingToken.setCreator(token.getCreator());
			existingToken.setOwner(buyer);
			tokenRepo.saveAndFlush(existingToken);
			return existingToken;
		}
		return null;
	}
	
	@Override
	public boolean destroy(String username, int tid) {
		boolean deleted = false;
		Token token = tokenRepo.findByOwner_UsernameAndId(username, tid);
		if(token != null) {
			tokenRepo.delete(token);
			deleted = true;
		}
		return deleted;
	}
	
}
