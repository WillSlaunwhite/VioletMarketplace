package com.skilldistillery.marketplace.services;

import com.skilldistillery.marketplace.dto.SearchResults;
import com.skilldistillery.marketplace.entities.Token;
import com.skilldistillery.marketplace.entities.User;
import com.skilldistillery.marketplace.enums.AccountStatus;
import com.skilldistillery.marketplace.enums.Status;
import com.skilldistillery.marketplace.repositories.TokenRepository;
import com.skilldistillery.marketplace.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;


@Service
public class SearchServiceImpl implements SearchService {
    public static final String ALL_QUERY = "all";


    @Autowired
    private TokenRepository tokenRepo;

    @Autowired
    private UserRepository userRepo;

    public SearchResults search(String query) {
        SearchResults searchResults = new SearchResults();

        if(query.trim().equalsIgnoreCase(ALL_QUERY)) {
            Set<Token> tokenResults = tokenRepo.findByStatus(Status.AVAILABLE);
            List<User> userResults = userRepo.findByAccountStatus(AccountStatus.ACTIVE);
            searchResults.setUsers(userResults);
            searchResults.setTokens(tokenResults);
            return searchResults;
        }

        Set<Token> tokenResults = tokenRepo.findByNameOrDescriptionIgnoreCase(query);
        List<User> userResults = userRepo.findByUsernameOrDisplayNameIgnoreCase(query);

        searchResults.setTokens(tokenResults);
        searchResults.setUsers(userResults);

        return searchResults;
    }
}
