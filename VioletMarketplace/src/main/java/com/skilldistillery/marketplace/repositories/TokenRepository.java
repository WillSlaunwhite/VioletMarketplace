package com.skilldistillery.marketplace.repositories;

import java.util.Set;

import com.skilldistillery.marketplace.enums.Status;
import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.marketplace.entities.Token;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface TokenRepository extends JpaRepository<Token, Integer>{
	@Query("SELECT t FROM Token t WHERE LOWER(t.name) LIKE LOWER(CONCAT('%',:query,'%')) OR LOWER(t.description) LIKE LOWER(CONCAT('%',:query,'%'))")
	Set<Token> findByNameOrDescriptionIgnoreCase(@Param("query") String query);

	Set<Token> findByStatus(Status status);
	Token findByName(String name);
	Set<Token> findByCreator_Username(String username);
	Set<Token> findByOwner_Username(String username);
	Token findByOwner_UsernameAndId(String username, int tokenId);
	Token findById(int id);
}
