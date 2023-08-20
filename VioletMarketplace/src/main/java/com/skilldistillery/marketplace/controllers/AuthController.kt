package com.skilldistillery.marketplace.controllers

import com.skilldistillery.marketplace.entities.User
import com.skilldistillery.marketplace.security.AuthenticationRequest
import com.skilldistillery.marketplace.security.AuthenticationResponse
import com.skilldistillery.marketplace.security.JwtUtil
import com.skilldistillery.marketplace.services.AuthService
import com.skilldistillery.marketplace.services.UserService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.authentication.BadCredentialsException
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.web.bind.annotation.*
import javax.servlet.http.HttpServletResponse

@RestController
@CrossOrigin("*", "http://localhost")
class AuthController {
    @Autowired
    private val authenticationManager: AuthenticationManager? = null

    @Autowired
    private val jwtUtil: JwtUtil? = null

    @Autowired
    private val authSvc: AuthService? = null

    @Autowired
    private val userService: UserService? = null
    @RequestMapping(path = ["/register"], method = [RequestMethod.POST])
    fun register(@RequestBody user: User?, res: HttpServletResponse): User? {
        var user = user
        if (user == null) {
            res.status = 400
        }
        user = authSvc!!.register(user)
        return user
    }

    @RequestMapping(path = ["/authenticate"], method = [RequestMethod.POST])
    @Throws(Exception::class)
    fun createAuthenticationToken(@RequestBody authenticationRequest: AuthenticationRequest): ResponseEntity<*> {
        try {
            authenticationManager!!.authenticate(
                UsernamePasswordAuthenticationToken(authenticationRequest.username, authenticationRequest.password)
            )
        } catch (e: BadCredentialsException) {
            throw Exception("Incorrect username or password", e)
        }
        println("username: " + authenticationRequest.username)
        val userDetails = userService
            .loadUserByUsername(authenticationRequest.username)
        val jwt = jwtUtil!!.generateToken(userDetails)
        println("jwt: $jwt")
        return ResponseEntity.ok(AuthenticationResponse(jwt))
    }
}
