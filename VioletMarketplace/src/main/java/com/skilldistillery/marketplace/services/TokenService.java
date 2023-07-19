package com.skilldistillery.marketplace.services;

import java.util.Set;

import com.skilldistillery.marketplace.entities.Token;
import com.skilldistillery.marketplace.requests.TokenUpdateRequest;

public interface TokenService {
	Set<Token> index();

	Set<Token> indexByUsername(String username);

	Token create(String username, Token token);

	Token purchase(String buyerName, TokenUpdateRequest token);

	Token update(String ownerName, Token token);

	boolean destroy(String username, int tid);

	Token showById(int tid);

    boolean tokenExists(int tid);

	boolean userOwnsToken(String username, int tid);

}
