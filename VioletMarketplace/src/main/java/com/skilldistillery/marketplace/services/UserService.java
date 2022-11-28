package com.skilldistillery.marketplace.services;

import com.skilldistillery.marketplace.entities.User;

public interface UserService {
	User getUserByUsername(String username);
	User show(int userId);
	User create(User user);
	User update(int userId, User user);
	boolean delete(int filmId);
}
