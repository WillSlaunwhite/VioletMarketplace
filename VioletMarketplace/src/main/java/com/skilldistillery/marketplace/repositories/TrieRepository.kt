package com.skilldistillery.marketplace.repositories

import Trie
import com.skilldistillery.marketplace.entities.Token
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
            tokenizeAndInsert(token.description, token)
        }
    }

    fun tokenizeAndInsert(description: String, token: Token) {
        // Splitting the description by whitespace and punctuation
        val words = description.split(Regex("\\s+|\\p{Punct}"))
        words.forEach { word ->
            trie.insert(word, token)
        }
    }
}