package com.skilldistillery.marketplace.services;

import com.skilldistillery.marketplace.entities.User;

public interface AuthService {
	User register(User user);
	User getUser(String username);
}

