package com.skilldistillery.marketplace.services;

import java.util.HashSet;
import java.util.Set;

import com.skilldistillery.marketplace.exceptions.AuthorizationException;
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
    public Token showById(int tid) {
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
    public Token update(String ownerName, Token token) {
        Token existingToken = tokenRepo.findByOwner_UsernameAndId(token.getOwner().getUsername(), token.getId());
        User owner = userRepo.findByUsername(ownerName);

        if(!owner.equals(token.getOwner())) {
            throw new AuthorizationException("User does not have permission to update this token.");
        }

        if (existingToken != null) {
            existingToken.setId(token.getId());
            existingToken.setName(token.getName());
            existingToken.setDescription(token.getDescription());
            existingToken.setOffered(token.isOffered());
            existingToken.setPrice(token.getPrice());
            existingToken.setRarity(token.getRarity());
            existingToken.setReleaseDate(token.getReleaseDate());
            existingToken.setTokenLocation(token.getTokenLocation());

            existingToken.setCollection(token.getCollection());
            existingToken.setTransfers(token.getTransfers());
            existingToken.setCreator(token.getCreator());
            tokenRepo.saveAndFlush(existingToken);
            return existingToken;
        }
        return null;
    }

    @Override
    public Token purchase(String buyerName, TokenUpdateRequest token) {
        Token existingToken = tokenRepo.findById(token.getId());
        User buyer = userRepo.findByUsername(buyerName);
        if(existingToken != null) {
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
