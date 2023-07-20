package com.skilldistillery.marketplace.controllers;

import com.skilldistillery.marketplace.dto.SearchResults;
import com.skilldistillery.marketplace.exceptions.TokenNotFoundException;
import com.skilldistillery.marketplace.exceptions.UserNotFoundException;
import com.skilldistillery.marketplace.interfaces.Searchable;
import com.skilldistillery.marketplace.services.SearchServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api")
@CrossOrigin({"*", "http://localhost:4301"})
public class SearchController {
    @Autowired
    private SearchServiceImpl searchService;

    @GetMapping("/search/{query}")
    public ResponseEntity<SearchResults> search(@PathVariable String query) {
        SearchResults sr = searchService.search(query);
        return ResponseEntity.ok(sr);
    }

}
