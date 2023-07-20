package com.skilldistillery.marketplace.services;

import com.skilldistillery.marketplace.dto.SearchResults;

public interface SearchService {
    SearchResults search(String query);
}
