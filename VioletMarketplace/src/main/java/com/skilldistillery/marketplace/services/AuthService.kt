package com.skilldistillery.marketplace.services

import com.skilldistillery.marketplace.entities.User

interface AuthService {
    fun register(user: User?): User?
    fun getUser(username: String?): User?
}
