package com.skilldistillery.marketplace.controllers;

import com.skilldistillery.marketplace.entities.Token;
import com.skilldistillery.marketplace.exceptions.InvalidTokenException;
import com.skilldistillery.marketplace.exceptions.TokenNotFoundException;
import com.skilldistillery.marketplace.services.TokenService;
import com.skilldistillery.marketplace.services.UserService;
import com.skilldistillery.marketplace.security.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.security.Principal;
import java.util.Set;


@RestController
@RequestMapping("api")
@CrossOrigin({"*", "http://localhost:4301"})
public class TokenController {
    @Autowired
    private TokenService tokenSvc;
    @Autowired
    private UserService userSvc;
    @Autowired
    private JwtUtil jwtUtil;

    /////////////// UNAUTH METHODS ///////////////////


    //	return all tokens
    @GetMapping("home/tokens")
    public ResponseEntity<Set<Token>> indexHome() {
        ResponseEntity<Set<Token>> result;
        try {
            Set<Token> tokenList = tokenSvc.index();
            if (tokenList.isEmpty()) {
                result = ResponseEntity.notFound().build();
            } else {
                result = ResponseEntity.ok(tokenList);
            }
        } catch (Exception e) {
            result = ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
        return result;
    }


    //	find non-principal user's tokens index method
    @GetMapping("tokens/user/{username}")
    public ResponseEntity<Set<Token>> indexNonPrincipal(@PathVariable String username) {
        try {
            Set<Token> tokenList = tokenSvc.indexByUsername(username);
            if (tokenList.isEmpty()) {
                return ResponseEntity.notFound().build();
            }
            return ResponseEntity.ok(tokenList);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    //	Get a specific token by id
    @GetMapping("tokens/id/{tid}")
    public ResponseEntity<Token> show(@PathVariable int tid) {
        Token token = tokenSvc.showById(tid);
        if (token == null) {
            throw new TokenNotFoundException("Token with id " + tid + " not found");
        }
        return ResponseEntity.ok(token);
    }


    /////////////// GET METHODS ///////////////////


    //	Get principal's list of tokens
    @GetMapping("tokens/myTokens")
    public ResponseEntity<Set<Token>> indexByUsername(HttpServletRequest request) {
        String jwt = request.getHeader("Authorization").substring(7);
        String username = jwtUtil.extractUsername(jwt);
        Set<Token> tokenList = tokenSvc.indexByUsername(username);

        if (tokenList.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(tokenList);
    }


    /////////////// POST METHODS ///////////////////


    @PostMapping("tokens")
    public ResponseEntity<Token> create(Principal principal,
                                        @RequestBody Token token) {
        if (token == null) {
            throw new InvalidTokenException("unable to create token");
        }
        tokenSvc.create(principal.getName(), token);
        return ResponseEntity.status(HttpStatus.CREATED).body(token);
    }


    /////////////// PUT METHODS ///////////////////


    // method has extra params it probably doesn't need
    @PutMapping("tokens/{tid}")
    public ResponseEntity<Token> purchaseToken(Principal principal,
                                               @PathVariable int tid) {
        Token token = tokenSvc.showByUsernameId(principal.getName(), tid);
        if (token == null) {
            throw new InvalidTokenException("unable to update token");
        }
        token = tokenSvc.update(principal.getName(), "dave", tid, token);
        return ResponseEntity.ok(token);
    }


    /////////////// DELETE METHODS ///////////////////


    @DeleteMapping("tokens/{tid}")
    public ResponseEntity<Void> destroy(HttpServletResponse resp, Principal principal, @PathVariable int tid) {
        if (!tokenSvc.tokenExists(tid)) {
            return ResponseEntity.noContent().build();
        }
        if (!tokenSvc.userOwnsToken(principal.getName(), tid)) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
}
