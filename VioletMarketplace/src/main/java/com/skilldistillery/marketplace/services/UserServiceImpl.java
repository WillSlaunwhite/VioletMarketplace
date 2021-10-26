package com.skilldistillery.marketplace.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.marketplace.entities.User;
import com.skilldistillery.marketplace.repositories.UserRepository;

@Service
public class UserServiceImpl implements UserService {
	@Autowired
	private UserRepository userRepo;
	
	@Override
	public User getUserByUsername(String username) {
		return userRepo.findByUsername(username);
	}

}
