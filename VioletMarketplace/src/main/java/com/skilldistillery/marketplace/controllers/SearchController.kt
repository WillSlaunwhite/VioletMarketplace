package com.skilldistillery.marketplace.controllers

import com.skilldistillery.marketplace.dtos.SearchResults
import com.skilldistillery.marketplace.services.SearchServiceImpl
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("api")
@CrossOrigin("*", "http://localhost:4301")
class SearchController(
    private val searchService: SearchServiceImpl,
) {
    @GetMapping("/search/{query}")
    fun search(@PathVariable query: String): ResponseEntity<SearchResults> {
        val sr = searchService.search(query)
        return ResponseEntity.ok(sr)
    }
}
