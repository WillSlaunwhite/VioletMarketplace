package com.skilldistillery.marketplace.repositories

import com.skilldistillery.marketplace.entities.Token
import com.skilldistillery.marketplace.enums.Status
import com.skilldistillery.marketplace.exceptions.TokenNotFoundException
import javax.persistence.EntityManager

class CustomTokenRepositoryImpl(private val em: EntityManager) : CustomTokenRepository {
    override fun findByIdOrThrow(id: Int): Token {
       return em.createQuery("SELECT t FROM Token t WHERE t.id = :id", Token::class.java)
           .setParameter("id", id)
           .resultList
           .firstOrNull()
           ?: throw TokenNotFoundException("Token with id $id not found.")
    }

    override fun findByStatus(status: Status): LinkedHashSet<Token> {
        val query = em.createQuery(
            "SELECT t FROM Token t WHERE t.status = :status",
            Token::class.java
        )
        query.setParameter("status", status)
        return LinkedHashSet(query.resultList) // Convert to immutable set
    }
}