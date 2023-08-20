package com.skilldistillery.marketplace.services

import com.skilldistillery.marketplace.entities.User
import com.skilldistillery.marketplace.enums.AccountStatus
import com.skilldistillery.marketplace.repositories.UserRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.stereotype.Repository
import javax.transaction.Transactional

@Repository
@Transactional
class AuthServiceImpl : AuthService {
    @Autowired
    private val userRepo: UserRepository? = null

    @Autowired
    private val encoder: PasswordEncoder? = null
    override fun register(user: User): User {
        val encodedPW = encoder!!.encode(user.password)
        user.password = encodedPW
        user.accountStatus = AccountStatus.ACTIVE
        user.role = "user"
        userRepo!!.saveAndFlush(user)
        return user
    }

    override fun getUser(username: String): User {
        // TODO Auto-generated method stub
        return userRepo!!.findByUsername(username)
    }
}
