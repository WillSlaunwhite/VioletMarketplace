package com.skilldistillery.marketplace.controllers

import com.skilldistillery.marketplace.dtos.UserRegistrationDTO
import com.skilldistillery.marketplace.exceptions.UserAlreadyExistsException
import com.skilldistillery.marketplace.exceptions.UserNotFoundException
import com.skilldistillery.marketplace.repositories.UserRepository
import com.skilldistillery.marketplace.security.AuthenticationRequest
import com.skilldistillery.marketplace.security.AuthenticationResponse
import com.skilldistillery.marketplace.security.JwtUtil
import com.skilldistillery.marketplace.services.AuthService
import com.skilldistillery.marketplace.services.UserService
import org.springframework.http.ResponseEntity
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.authentication.BadCredentialsException
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.web.bind.annotation.*
import javax.servlet.http.HttpServletResponse

@RestController
@CrossOrigin("*", "http://localhost")
class AuthController(
    private val authSvc: AuthService,
    private val userRepo: UserRepository,
    private val userService: UserService,
    private val jwtUtil: JwtUtil,
    private val authenticationManager: AuthenticationManager
) {

    @PostMapping("/register")
    fun register(
        @RequestBody userDto: UserRegistrationDTO, res: HttpServletResponse
    ): ResponseEntity<AuthenticationResponse> {
        userRepo.findByUsername(userDto.username)?.let {
            throw UserAlreadyExistsException("User with username ${userDto.username} already exists.")
        }

        val registeredUser = authSvc.register(userDto)

        val userDetails = userService.loadUserByUsername(userDto.username)
            ?: throw UserNotFoundException("Could not find user with username ${userDto.username} after registration.")
        val jwt = jwtUtil.generateToken(userDetails)

        return ResponseEntity.ok(AuthenticationResponse(jwt))
    }

    @PostMapping("/authenticate")
    fun createAuthenticationToken(@RequestBody authenticationRequest: AuthenticationRequest): ResponseEntity<AuthenticationResponse> {
        try {
            authenticationManager.authenticate(
                UsernamePasswordAuthenticationToken(authenticationRequest.username, authenticationRequest.password)
            )
        } catch (e: BadCredentialsException) {
            throw Exception("Incorrect username or password", e)
        }
        println("username: " + authenticationRequest.username)
        val userDetails = userService.loadUserByUsername(authenticationRequest.username)
            ?: throw UserNotFoundException("Could not find user with username ${authenticationRequest.username} after registration.")
        val jwt = jwtUtil.generateToken(userDetails)
        println("jwt: $jwt")
        return ResponseEntity.ok(AuthenticationResponse(jwt))
    }
}
