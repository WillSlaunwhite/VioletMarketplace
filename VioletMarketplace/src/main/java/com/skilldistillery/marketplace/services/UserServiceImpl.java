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

	@Override
	public User show(int userId) {
		return userRepo.findById(userId).get();
	}

	@Override
	public User create(User user) {
		return userRepo.saveAndFlush(user);
	}

	@Override
	public User update(int userId, User user) {
		user.setId(userId);
		return userRepo.saveAndFlush(user);
	}

	@Override
	public boolean delete(int userId) {
		userRepo.deleteById(userId);
		return !userRepo.existsById(userId);
	}

}
