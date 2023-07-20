package com.skilldistillery.marketplace.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.skilldistillery.marketplace.entities.Token;
import com.skilldistillery.marketplace.entities.User;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class SearchResults {
    private List<User> users;
    private Set<Token> tokens;

    public SearchResults(List<User> users, Set<Token> tokens) {
        this.users = users;
        this.tokens = tokens;
    }

    public SearchResults() {
        this.users = new ArrayList<>();
        this.tokens = new HashSet<>();
    }

    @JsonProperty("users")
    public List<User> getUsers() {
        return users;
    }

    public void setUsers(List<User> users) {
        this.users = users;
    }

    @JsonProperty("tokens")
    public Set<Token> getTokens() {
        return tokens;
    }

    public void setTokens(Set<Token> tokens) {
        this.tokens = tokens;
    }
}
