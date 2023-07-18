package com.skilldistillery.marketplace.controllers;

import com.skilldistillery.marketplace.interfaces.Searchable;
import com.skilldistillery.marketplace.services.SearchServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api")
@CrossOrigin({"*", "http://localhost:4301"})
public class SearchController {
    @Autowired
    private SearchServiceImpl searchService;

    @GetMapping("/search/{query}")
    public List<Searchable> search(@PathVariable String query) {
        return searchService.search(query);
    }

}
