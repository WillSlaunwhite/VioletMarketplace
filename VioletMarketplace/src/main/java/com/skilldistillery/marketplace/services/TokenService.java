package com.skilldistillery.marketplace.services;

import java.util.Set;

import com.skilldistillery.marketplace.entities.Token;
import com.skilldistillery.marketplace.dto.TokenUpdateRequest;

public interface TokenService {
	Set<Token> index();

	Set<Token> indexByUsername(String username);

	Token findById(int tid);

	Token create(String username, Token token);

	Token purchase(String buyerName, int tid);

	Token update(String ownerName, TokenUpdateRequest request);

	boolean destroy(String username, int tid);

    boolean tokenExists(int tid);

	boolean userOwnsToken(String username, int tid);

}
