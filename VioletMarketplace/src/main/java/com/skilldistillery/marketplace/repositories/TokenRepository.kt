package com.skilldistillery.marketplace.repositories

import com.skilldistillery.marketplace.entities.Token
import com.skilldistillery.marketplace.enums.Status
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.query.Param

interface TokenRepository : JpaRepository<Token, Int> {
    @Query("SELECT t FROM Token t WHERE LOWER(t.name) LIKE LOWER(CONCAT('%',:query,'%')) OR LOWER(t.description) LIKE LOWER(CONCAT('%',:query,'%'))")
    fun findByNameOrDescriptionIgnoreCase(@Param("query") query: String?): Set<Token?>?
    fun findByStatus(status: Status?): Set<Token?>?
    fun findByName(name: String?): Token?
    fun findByCreator_Username(username: String?): Set<Token?>?
    fun findByOwner_Username(username: String?): Set<Token?>?
    fun findByOwner_UsernameAndId(username: String?, tokenId: Int): Token?
    override fun findById(id: Int): Token
}
