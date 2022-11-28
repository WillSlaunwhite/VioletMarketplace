package com.skilldistillery.marketplace.controllers;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
		return userSvc.getUserByUsername(username);
	}
	
	@GetMapping("user/id/{userId}")
	public User returnUser(@PathVariable int userId) {
		return userSvc.show(userId);
	}
	
	@PostMapping("user")
	public User addUser(@RequestBody User user, HttpServletRequest req, HttpServletResponse resp) {
		try {
			user = userSvc.create(user);
			resp.setStatus(201);
			StringBuffer url = req.getRequestURL();
			url.append("/").append(user.getId());
			resp.setHeader("Location", url.toString());
		} catch (Exception e) {
			System.err.println(e);
			resp.setStatus(400);
			user = null;
		} return user;
	}
	
	@PutMapping("user/{userId}")
	public User updateUser(@PathVariable Integer userId, @RequestBody User user) {
		return userSvc.update(userId, user);
	}
	
	@DeleteMapping("user/{userId}")
	public Boolean deleteUser(@PathVariable Integer userId) {
		return userSvc.delete(userId);
	}
	
	
}
