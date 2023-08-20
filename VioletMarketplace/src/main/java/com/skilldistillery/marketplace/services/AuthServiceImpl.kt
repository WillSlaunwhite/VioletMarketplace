package com.skilldistillery.marketplace.services

import com.skilldistillery.marketplace.dtos.UserRegistrationDTO
import com.skilldistillery.marketplace.entities.User
import com.skilldistillery.marketplace.enums.AccountStatus
import com.skilldistillery.marketplace.repositories.UserRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.stereotype.Repository
import javax.transaction.Transactional

@Repository
@Transactional
class AuthServiceImpl(
    private val userRepo: UserRepository,
    private val encoder: PasswordEncoder,
) : AuthService {
    override fun register(userDto: UserRegistrationDTO): User {
        val user = User(
            username = userDto.username,
            password = encoder.encode(userDto.password),
            email = userDto.email,
            displayName = userDto.displayName ?: userDto.username,
            biography = userDto.biography,
            pictureUrl = userDto.pictureUrl,
            accountStatus = AccountStatus.ACTIVE,
            role = "user"
        )
        return userRepo.saveAndFlush(user)
    }

    override fun getUser(username: String): User? = userRepo.findByUsername(username)
}
