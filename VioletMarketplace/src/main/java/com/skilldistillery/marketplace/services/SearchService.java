package com.skilldistillery.marketplace.services;

import com.skilldistillery.marketplace.dtos.SearchResults;

public interface SearchService {
    SearchResults search(String query);
}
