package com.skilldistillery.marketplace.services;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Repository;

import com.skilldistillery.marketplace.entities.User;
import com.skilldistillery.marketplace.repositories.UserRepository;

@Repository
@Transactional
public class AuthServicImpl implements AuthService {

		@Autowired
		private UserRepository userRepo;

		@Autowired
		private PasswordEncoder encoder;

		@Override
		public User register(User user) {
			String encodedPW = encoder.encode(user.getPassword());
			user.setPassword(encodedPW); 

			user.setEnabled(true);
			user.setRole("standard");

			userRepo.saveAndFlush(user);
			return user;
		}

		@Override
		public User getUser(String username) {
			// TODO Auto-generated method stub
			return userRepo.findByUsername(username);
		}
	

}
