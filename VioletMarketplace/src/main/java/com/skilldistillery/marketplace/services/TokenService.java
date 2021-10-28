package com.skilldistillery.marketplace.services;

import java.util.Set;

import com.skilldistillery.marketplace.entities.Token;

public interface TokenService {
	public Set<Token> index();

	public Token show(String username, int tid);

	public Token create(String username, Token token);
}
