package com.skilldistillery.marketplace.repositories

import com.skilldistillery.marketplace.entities.Token
import com.skilldistillery.marketplace.enums.Status
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.query.Param
import java.util.*

interface TokenRepository : JpaRepository<Token, Int>, CustomTokenRepository {
    @Query("SELECT COUNT(t) > 0 FROM Token t WHERE t.owner.username = :username AND t.id = :tokenId")
    fun userOwnsToken(@Param("username") username: String, @Param("tokenId") tokenId: Int): Boolean

    @Query("SELECT t FROM Token t WHERE LOWER(t.name) LIKE LOWER(CONCAT('%',:query,'%')) OR LOWER(t.description) LIKE LOWER(CONCAT('%',:query,'%'))")
    fun findByNameOrDescriptionIgnoreCase(@Param("query") query: String): LinkedHashSet<Token>

    @Query( value = "select t.*, COUNT(v.id) as view_count from token t left join token_view v on t.id = v.token_id group by  t.id, t.name, t.description, t.rarity, t.status, t.release_date, t.updated_on, t.price, t.collection_id, t.owner_id, t.creator_id, t.token_location  order by COUNT(v.id) desc limit 10", nativeQuery = true)
    fun findTop10ByStatusOrderByViewsDesc(status: Status): List<Token>


    fun findByName(name: String): Token
    fun findByCreator_Username(username: String): LinkedHashSet<Token>
    fun findByOwner_Username(username: String): LinkedHashSet<Token>
    fun findByOwner_UsernameAndId(username: String, tokenId: Int): Token


    override fun findById(id: Int): Optional<Token>

    // from CustomTokenRepository
    override fun findByIdOrThrow(id: Int): Token
    override fun findByStatus(status: Status): LinkedHashSet<Token>
}
