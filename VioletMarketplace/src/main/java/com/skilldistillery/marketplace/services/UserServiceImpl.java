package com.skilldistillery.marketplace.services;

import com.skilldistillery.marketplace.entities.User;
import com.skilldistillery.marketplace.enums.AccountStatus;
import com.skilldistillery.marketplace.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserServiceImpl implements UserService, UserDetailsService {
	@Autowired
	private UserRepository userRepo;

	@Override
	public User getUserByUsername(String username) {
		return userRepo.findByUsername(username);
	}

	public List<User> getAllActiveUsers() { return userRepo.findByAccountStatus(AccountStatus.ACTIVE); }

	@Override
	public User show(int userId) {
		if(userRepo.findById(userId).isPresent()) {
			return userRepo.findById(userId).get();
		}
		return null;
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

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = userRepo.findByUsername(username);
		if (user == null) {
			throw new UsernameNotFoundException("User not found with username: " + username);
		}
		return new org.springframework.security.core.userdetails.User(user.getUsername(),
                user.getPassword(), new ArrayList<>());
	}

}
