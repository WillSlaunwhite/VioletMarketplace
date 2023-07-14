package com.skilldistillery.marketplace.services;

import com.skilldistillery.marketplace.interfaces.Searchable;

import java.util.List;

public interface SearchService {
    List<Searchable> search(String query);
}
