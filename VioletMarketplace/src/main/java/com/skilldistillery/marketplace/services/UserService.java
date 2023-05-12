package com.skilldistillery.marketplace.services;

import com.skilldistillery.marketplace.entities.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

public interface UserService {
	User getUserByUsername(String username);
	User show(int userId);
	User create(User user);
	User update(int userId, User user);
	boolean delete(int filmId);
    UserDetails loadUserByUsername(String username) throws UsernameNotFoundException;
}
