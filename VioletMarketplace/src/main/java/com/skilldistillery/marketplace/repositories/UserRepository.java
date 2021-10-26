package com.skilldistillery.marketplace.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.marketplace.entities.User;

public interface UserRepository extends JpaRepository<User, Integer> {
	User findByUsername(String username);
}
