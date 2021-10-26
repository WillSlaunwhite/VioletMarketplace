package com.skilldistillery.marketplace.services;

import com.skilldistillery.marketplace.entities.User;

public interface UserService {
	User getUserByUsername(String username);
}
