package com.skilldistillery.marketplace.services

import com.skilldistillery.marketplace.dtos.UserRegistrationDTO
import com.skilldistillery.marketplace.entities.User

interface AuthService {
    fun getUser(username: String): User?
    fun register(userDto: UserRegistrationDTO): User
}
