package com.skilldistillery.marketplace.services;

import java.util.Set;

import org.springframework.stereotype.Service;

import com.skilldistillery.marketplace.entities.Token;

public interface TokenService {
	public Set<Token> index();

	public Token showByUsernameId(String username, int tid);

	public Token create(String username, Token token);

	public Set<Token> indexByUsername(String username);

	boolean destroy(String username, int tid);

	public Token update(String ownerName, String buyerName, int tid, Token token);

	public Token showById(int tid);

//	public Token update(String name, int tid, Token token);
}
