package com.skilldistillery.marketplace.services

import com.skilldistillery.marketplace.dto.SearchResults
import com.skilldistillery.marketplace.entities.Token
import com.skilldistillery.marketplace.entities.User
import com.skilldistillery.marketplace.enums.AccountStatus
import com.skilldistillery.marketplace.enums.Status
import com.skilldistillery.marketplace.repositories.TokenRepository
import com.skilldistillery.marketplace.repositories.TrieRepository
import com.skilldistillery.marketplace.repositories.UserRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class SearchServiceImpl(private val userRepo: UserRepository, private val tokenRepo: TokenRepository, private val trieRepo: TrieRepository) : SearchService {
    // TODO removed all check from function, need to adjust accordingly
    override fun search(query: String): SearchResults {
        val trieResults = trieRepo.trie.search(query)

        val tokenResults = trieResults.filter { it.type == "token" }.map { it as Token }.toSet()
        val userResults = trieResults.filter { it.type == "user" }.map { it as User }.toSet()
        return SearchResults(userResults, tokenResults)
    }
}
