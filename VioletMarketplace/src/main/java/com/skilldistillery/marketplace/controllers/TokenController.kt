package com.skilldistillery.marketplace.controllers

import com.skilldistillery.marketplace.dtos.TokenUpdateRequest
import com.skilldistillery.marketplace.entities.Token
import com.skilldistillery.marketplace.exceptions.AuthorizationException
import com.skilldistillery.marketplace.exceptions.InvalidTokenException
import com.skilldistillery.marketplace.exceptions.TokenNotFoundException
import com.skilldistillery.marketplace.security.JwtUtil
import com.skilldistillery.marketplace.services.TokenService
import com.skilldistillery.marketplace.services.UserService
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import java.security.Principal
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse

@RestController
@RequestMapping("api")
@CrossOrigin("*", "http://localhost:4301")
class TokenController(private val tokenSvc: TokenService, private val userSvc: UserService, private val jwtUtil: JwtUtil) {
    /////////////// UNAUTH METHODS ///////////////////
    //	return all tokens
    @GetMapping("tokens/home")
    fun indexHome(): ResponseEntity<Set<Token>> {
        val tokenList = tokenSvc.index()
        if (tokenList.isEmpty()) {
            throw TokenNotFoundException("Unable to load index token list.")
        }
        return ResponseEntity.ok(tokenList)
    }

    @GetMapping("tokens/popular")
    fun popularTokens(): ResponseEntity<Set<Token>> {
        val tokenList = tokenSvc.index()
        if (tokenList.isEmpty()) {
            throw TokenNotFoundException("Unable to load index token list.")
        }
        return ResponseEntity.ok(tokenList)
    }

    @GetMapping("tokens/featured")
    fun featuredTokens(): ResponseEntity<Set<Token>> {
        val tokenList = tokenSvc.index()
        if (tokenList.isEmpty()) {
            throw TokenNotFoundException("Unable to load index token list.")
        }
        return ResponseEntity.ok(tokenList)
    }
    //	find non-principal user's tokens index method
    @GetMapping("tokens/user/{username}")
    fun indexNonPrincipal(@PathVariable username: String): ResponseEntity<Set<Token>> {
        val tokenList = tokenSvc.indexByUsername(username)
        if (tokenList.isEmpty()) {
            throw TokenNotFoundException("No tokens found for user with username $username")
        }
        return ResponseEntity.ok(tokenList)
    }

    //	Get a specific token by id
    @GetMapping("tokens/id/{tid}")
    fun show(@PathVariable tid: Int): ResponseEntity<Token> {
        val token = tokenSvc.findById(tid) ?: throw TokenNotFoundException("Token with id $tid not found")
        return ResponseEntity.ok(token)
    }

    /////////////// GET METHODS ///////////////////
    //	Get principal's list of tokens
    @GetMapping("tokens/myTokens")
    fun indexByUsername(principal: Principal, request: HttpServletRequest?): ResponseEntity<Set<Token>> {
        val tokenList = tokenSvc.indexByUsername(principal.name)
        if (tokenList.isEmpty()) {
            throw TokenNotFoundException("No tokens found for user with username " + principal.name)
        }
        return ResponseEntity.ok(tokenList)
    }

    /////////////// POST METHODS ///////////////////
    @PostMapping("tokens")
    fun create(principal: Principal, @RequestBody token: Token?): ResponseEntity<Token> {
        if (token == null) {
            throw InvalidTokenException("Unable to create empty token, please check fields and try again.")
        }
        val createdToken = tokenSvc.create(principal.name, token)
        return ResponseEntity.status(HttpStatus.CREATED).body(createdToken)
    }

    /////////////// PUT METHODS ///////////////////
    @PutMapping("tokens/buy/{tid}")
    fun purchaseToken(principal: Principal, @PathVariable tid: Int): ResponseEntity<Token> {
        if (!tokenSvc.tokenExists(tid)) {
            throw TokenNotFoundException("Token with id $tid not found.")
        }
        val token = tokenSvc.purchase(principal.name, tid)
        return ResponseEntity.ok(token)
    }

    @PutMapping("tokens/{tid}")
    fun update(principal: Principal, @RequestBody request: TokenUpdateRequest): ResponseEntity<Token> {
        if (!tokenSvc.tokenExists(request.tokenId)) {
            throw TokenNotFoundException("Token with id " + request.tokenId + " not found.")
        }
        val token = tokenSvc.update(principal.name, request)
        return ResponseEntity.ok(token)
    }

    /////////////// DELETE METHODS ///////////////////
    @DeleteMapping("tokens/{tid}")
    fun destroy(resp: HttpServletResponse?, principal: Principal, @PathVariable tid: Int): ResponseEntity<Void> {
        if (!tokenSvc.tokenExists(tid)) {
            throw TokenNotFoundException("Token with id $tid not found.")
        }
        if (!tokenSvc.userOwnsToken(principal.name, tid)) {
            throw AuthorizationException("User is not authorized to delete this token.")
        }
        tokenSvc.destroy(principal.name, tid)
        return ResponseEntity.ok().build()
    }
}
