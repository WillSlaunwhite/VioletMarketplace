package com.skilldistillery.marketplace.services

import com.skilldistillery.marketplace.entities.User
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.core.userdetails.UsernameNotFoundException

interface UserService {
    fun getUserByUsername(username: String?): User?
    fun show(userId: Int): User?
    fun create(user: User?): User?
    fun update(userId: Int, user: User?): User?
    fun delete(filmId: Int): Boolean

    @Throws(UsernameNotFoundException::class)
    fun loadUserByUsername(username: String?): UserDetails?
}
