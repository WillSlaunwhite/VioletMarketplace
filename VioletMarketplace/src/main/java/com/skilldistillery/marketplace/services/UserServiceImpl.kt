package com.skilldistillery.marketplace.services

import com.skilldistillery.marketplace.entities.User
import com.skilldistillery.marketplace.enums.AccountStatus
import com.skilldistillery.marketplace.repositories.UserRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.security.core.userdetails.UsernameNotFoundException
import org.springframework.stereotype.Service

@Service
class UserServiceImpl(
    private val userRepo: UserRepository
) : UserService, UserDetailsService {
    @Autowired
    override fun getUserByUsername(username: String): User {
        return userRepo.findByUsername(username)
    }

    val allActiveUsers: LinkedHashSet<User>
        get() = userRepo.findByAccountStatus(AccountStatus.ACTIVE)

    override fun show(userId: Int): User? {
        return if (userRepo.findById(userId).isPresent) {
            userRepo.findById(userId).get()
        } else null
    }

    override fun create(user: User): User {
        return userRepo.saveAndFlush(user)
    }

    override fun update(userId: Int, user: User): User {
        user.id = userId
        return userRepo.saveAndFlush(user)
    }

    override fun delete(userId: Int): Boolean {
        userRepo.deleteById(userId)
        return !userRepo.existsById(userId)
    }

    @Throws(UsernameNotFoundException::class)
    override fun loadUserByUsername(username: String): UserDetails {
        val (_, username1, password) = userRepo.findByUsername(username)
            ?: throw UsernameNotFoundException("User not found with username: $username")
        return org.springframework.security.core.userdetails.User(
            username1,
            password, ArrayList()
        )
    }
}
