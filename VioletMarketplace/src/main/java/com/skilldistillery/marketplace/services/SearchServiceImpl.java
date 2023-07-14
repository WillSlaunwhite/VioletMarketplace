package com.skilldistillery.marketplace.services;

import com.skilldistillery.marketplace.entities.Token;
import com.skilldistillery.marketplace.entities.User;
import com.skilldistillery.marketplace.interfaces.Searchable;
import com.skilldistillery.marketplace.repositories.TokenRepository;
import com.skilldistillery.marketplace.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SearchServiceImpl implements SearchService {

    @Autowired
    private TokenRepository tokenRepo;

    @Autowired
    private UserRepository userRepo;

    public List<Searchable> search(String query) {
        List<Searchable> searchResults = new ArrayList<>();

        List<Token> tokenResults = tokenRepo.findByNameOrDescriptionIgnoreCase(query);
        List<User> userResults = userRepo.findByUsernameOrDisplayNameIgnoreCase(query);

        searchResults.addAll(tokenResults);
        searchResults.addAll(userResults);

        return searchResults;
    }
}
