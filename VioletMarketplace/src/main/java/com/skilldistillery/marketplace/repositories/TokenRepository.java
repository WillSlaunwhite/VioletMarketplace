package com.skilldistillery.marketplace.repositories;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.marketplace.entities.Token;

public interface TokenRepository extends JpaRepository<Token, Integer>{
	Set<Token> findByOfferedTrue();
	Token findByName(String name);
	Set<Token> findByCreator_Username(String username);
	Set<Token> findByOwner_Username(String username);
	Token findByOwner_UsernameAndId(String username, int tokenId);
	Token queryById(int id);
}
