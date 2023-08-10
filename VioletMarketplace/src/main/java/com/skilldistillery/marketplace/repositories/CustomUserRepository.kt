package com.skilldistillery.marketplace.repositories

import com.skilldistillery.marketplace.entities.User

interface CustomUserRepository {
    fun findByUsernameOrThrow(username: String): User
    fun findByUsernameOrDisplayNameIgnoreCase(query: String): LinkedHashSet<User>
}