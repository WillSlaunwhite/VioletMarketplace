package com.skilldistillery.marketplace.services;

import javax.transaction.Transactional;

import com.skilldistillery.marketplace.enums.AccountStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Repository;

import com.skilldistillery.marketplace.entities.User;
import com.skilldistillery.marketplace.repositories.UserRepository;

@Repository
@Transactional
public class AuthServiceImpl implements AuthService {

		@Autowired
		private UserRepository userRepo;

		@Autowired
		private PasswordEncoder encoder;

		@Override
		public User register(User user) {
			String encodedPW = encoder.encode(user.getPassword());
			user.setPassword(encodedPW);

			user.setAccountStatus(AccountStatus.ACTIVE);
			user.setRole("user");

			userRepo.saveAndFlush(user);
			return user;
		}

		@Override
		public User getUser(String username) {
			// TODO Auto-generated method stub
			return userRepo.findByUsername(username);
		}


}
