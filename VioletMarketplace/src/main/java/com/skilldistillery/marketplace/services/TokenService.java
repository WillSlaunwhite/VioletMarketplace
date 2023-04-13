package com.skilldistillery.marketplace.services;

import java.util.Set;

import com.skilldistillery.marketplace.entities.Token;

public interface TokenService {
	Set<Token> index();

	Token showByUsernameId(String username, int tid);

	Token create(String username, Token token);

	Set<Token> indexByUsername(String username);

	boolean destroy(String username, int tid);

	Token update(String ownerName, String buyerName, int tid, Token token);

	Token showById(int tid);

//	public Token update(String name, int tid, Token token);
}
