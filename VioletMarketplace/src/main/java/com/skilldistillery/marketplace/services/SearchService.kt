package com.skilldistillery.marketplace.services

import com.skilldistillery.marketplace.dtos.SearchResults

interface SearchService {
    fun search(query: String): SearchResults
}
