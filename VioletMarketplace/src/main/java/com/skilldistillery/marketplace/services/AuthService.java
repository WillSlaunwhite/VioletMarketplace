package com.skilldistillery.marketplace.services;

import com.skilldistillery.marketplace.entities.User;

public interface AuthService {
	public User register(User user);
	public User getUser(String username);
}

