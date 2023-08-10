package com.skilldistillery.marketplace.repositories

import Trie
import com.skilldistillery.marketplace.entities.Token
import com.skilldistillery.marketplace.entities.User
import com.skilldistillery.marketplace.interfaces.Searchable
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
            tokenizeAndInsert(user.username, user.id, "User")
            tokenizeAndInsert(user.displayName, user.id, "User")
        }

        tokenRepository.findAll().forEach { token ->
            tokenizeAndInsert(token.name, token.id, "Token")
            tokenizeAndInsert(token.description, token.id, "Token")
        }
    }

    fun tokenizeAndInsert(description: String, id: Int, type: String) {
        // Splitting the description by whitespace and punctuation
        val words = description.split(Regex(pattern = "\\s+|\\p{Punct}"))
        words.forEach { word ->
            trie.insert(word, id, type)
        }
    }
}