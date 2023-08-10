package com.skilldistillery.marketplace.repositories

import com.skilldistillery.marketplace.entities.User
import com.skilldistillery.marketplace.exceptions.UserNotFoundException
import javax.persistence.EntityManager

class CustomUserRepositoryImpl(private val em: EntityManager) : CustomUserRepository {
    override fun findByUsernameOrThrow(username: String): User {
        return em.createQuery("SELECT u FROM User u WHERE u.username = :username", User::class.java)
            .setParameter("username", username)
            .resultList
            .firstOrNull()
            ?: throw UserNotFoundException("User with username $username not found.")
    }

    override fun findByUsernameOrDisplayNameIgnoreCase(query: String): LinkedHashSet<User> {
        val sq = em.createQuery(
            "SELECT u FROM User u WHERE u.displayName = :query OR u.username = :query",
            User::class.java
        )
        sq.setParameter("query", query)
        return LinkedHashSet(sq.resultList.toSet())// Convert to immutable set
    }
}