package com.skilldistillery.marketplace.controllers;

import com.skilldistillery.marketplace.entities.User;
import com.skilldistillery.marketplace.security.AuthenticationRequest;
import com.skilldistillery.marketplace.security.AuthenticationResponse;
import com.skilldistillery.marketplace.security.JwtUtil;
import com.skilldistillery.marketplace.services.AuthService;
import com.skilldistillery.marketplace.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;

@RestController
@CrossOrigin({"*", "http://localhost"})
public class AuthController {
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private AuthService authSvc;

    @Autowired
    private UserService userService;

    @RequestMapping(path = "/register", method = RequestMethod.POST)
    public User register(@RequestBody User user, HttpServletResponse res) {

        if (user == null) {
            res.setStatus(400);
        }

        user = authSvc.register(user);

        return user;
    }

//	@RequestMapping(path = "/authenticate", method = RequestMethod.GET)
//	public User authenticate(Principal principal) {
//
//		return authSvc.getUser(principal.getName());
//	}

    @RequestMapping(path = "/authenticate", method = RequestMethod.POST)
    public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest) throws Exception {

        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(), authenticationRequest.getPassword())
            );
        } catch (BadCredentialsException e) {
            throw new Exception("Incorrect username or password", e);
        }
        System.out.println("username: " + authenticationRequest.getUsername());
        final UserDetails userDetails = userService
                .loadUserByUsername(authenticationRequest.getUsername());

        final String jwt = jwtUtil.generateToken(userDetails);
        System.out.println("jwt: " + jwt);
        return ResponseEntity.ok(new AuthenticationResponse(jwt));
    }

}
