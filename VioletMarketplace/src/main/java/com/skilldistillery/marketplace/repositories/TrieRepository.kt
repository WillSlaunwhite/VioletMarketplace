package com.skilldistillery.marketplace.repositories

import Trie
import org.springframework.stereotype.Service
import javax.annotation.PostConstruct

@Service
class TrieRepository(
    private val userRepository: UserRepository,
    private val tokenRepository: TokenRepository
) {
    val trie: Trie = Trie()

    @PostConstruct
    fun initialize() {
        userRepository.findAll().forEach { user ->
            trie.insert("${user.username}", user)
            trie.insert("${user.displayName}", user)
        }

        tokenRepository.findAll().forEach { token ->
            trie.insert("${token.name}", token)
            trie.insert(token.description, token)
        }
    }
}