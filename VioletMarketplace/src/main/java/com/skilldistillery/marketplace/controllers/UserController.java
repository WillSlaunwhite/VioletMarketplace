package com.skilldistillery.marketplace.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.marketplace.entities.User;
import com.skilldistillery.marketplace.services.UserService;

@RestController
@RequestMapping("api")
@CrossOrigin({"*", "http://localhost:4301"})
public class UserController {
	@Autowired
	private UserService userSvc;
	
	@GetMapping("user/{username}")
	public User returnUser(@PathVariable String username) {
		User toReturn = userSvc.getUserByUsername(username);
		return toReturn;
	}
}
