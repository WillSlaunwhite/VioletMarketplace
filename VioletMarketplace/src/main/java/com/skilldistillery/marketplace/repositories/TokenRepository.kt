package com.skilldistillery.marketplace.repositories

import com.skilldistillery.marketplace.entities.Token
import com.skilldistillery.marketplace.enums.Status
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.query.Param
import java.util.*
import kotlin.collections.LinkedHashSet

interface TokenRepository : JpaRepository<Token, Int>, CustomTokenRepository {
    @Query("SELECT t FROM Token t WHERE LOWER(t.name) LIKE LOWER(CONCAT('%',:query,'%')) OR LOWER(t.description) LIKE LOWER(CONCAT('%',:query,'%'))")
    fun findByNameOrDescriptionIgnoreCase(@Param("query") query: String): LinkedHashSet<Token>
    fun findByName(name: String): Token
    fun findByCreator_Username(username: String): LinkedHashSet<Token>
    fun findByOwner_Username(username: String): LinkedHashSet<Token>
    fun findByOwner_UsernameAndId(username: String, tokenId: Int): Token
    override fun findById(id: Int): Optional<Token>

    // from CustomTokenRepository
    override fun findByIdOrThrow(id: Int): Token
    override fun findByStatus(status: Status): LinkedHashSet<Token>
}
