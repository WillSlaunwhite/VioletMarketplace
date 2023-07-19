package com.skilldistillery.marketplace.services;

import java.util.HashSet;
import java.util.Set;

import com.skilldistillery.marketplace.exceptions.AuthorizationException;
import com.skilldistillery.marketplace.exceptions.TokenNotFoundException;
import com.skilldistillery.marketplace.requests.TokenUpdateRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.marketplace.entities.Token;
import com.skilldistillery.marketplace.entities.User;
import com.skilldistillery.marketplace.repositories.TokenRepository;
import com.skilldistillery.marketplace.repositories.UserRepository;

@Service
public class TokenServiceImpl implements TokenService {
    @Autowired
    private TokenRepository tokenRepo;

    @Autowired
    private UserRepository userRepo;


    @Override
    public Set<Token> index() {
        return new HashSet<>(tokenRepo.findByOfferedTrue());
    }

    @Override
    public Set<Token> indexByUsername(String username) {
        return tokenRepo.findByOwner_Username(username);
    }

    @Override
    public Token findById(int tid) {
        return tokenRepo.findById(tid);
    }

    @Override
    public Token create(String username, Token token) {
        User user = userRepo.findByUsername(username);
        if (user != null) {
            token.setCreator(user);
            token.setOwner(user);
//			token.setCollection(collectionRepo.findById(1))   probably need collection repo
//			token.setTransfers(transferRepo.findAll());       probably need transfer repo
            tokenRepo.saveAndFlush(token);
            return token;
        } else {
            return null;
        }
    }

    @Override
    public Token update(String ownerName, TokenUpdateRequest request) {
        Token existingToken = tokenRepo.findById(request.getTokenId());
        if (existingToken == null) {
            throw new TokenNotFoundException("Token with id " + request.getTokenId() + " not found.");
        }

        User owner = userRepo.findByUsername(ownerName);
        if (!owner.equals(existingToken.getOwner())) {
            throw new AuthorizationException("User does not have permission to update this token.");
        }


        existingToken.setId(request.getTokenId());
        existingToken.setName(request.getName());
        existingToken.setDescription(request.getDescription());
        existingToken.setOffered(request.isOffered());
        existingToken.setPrice(request.getPrice());
        existingToken.setRarity(request.getRarity());
        existingToken.setTokenLocation(request.getTokenLocation());

        existingToken.setCollection(request.getCollection());
        tokenRepo.saveAndFlush(existingToken);
        return existingToken;
    }

    @Override
    public Token purchase(String buyerName, int tid) {
        Token existingToken = tokenRepo.findById(tid);
        User buyer = userRepo.findByUsername(buyerName);
        if (existingToken != null) {
            existingToken.setOwner(buyer);
            tokenRepo.saveAndFlush(existingToken);
            return existingToken;
        }
        return null;
    }

    @Override
    public boolean destroy(String username, int tid) {
        boolean deleted = false;
        Token token = tokenRepo.findByOwner_UsernameAndId(username, tid);
        if (token != null) {
            tokenRepo.delete(token);
            deleted = true;
        }
        return deleted;
    }

    @Override
    public boolean tokenExists(int tid) {
        return tokenRepo.existsById(tid);
    }

    @Override
    public boolean userOwnsToken(String username, int tid) {
        return tokenRepo.findById(tid) != null;
    }
}
