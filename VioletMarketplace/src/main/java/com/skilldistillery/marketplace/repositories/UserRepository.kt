package com.skilldistillery.marketplace.repositories

import com.skilldistillery.marketplace.entities.User
import com.skilldistillery.marketplace.enums.AccountStatus
import org.springframework.data.jpa.repository.JpaRepository

interface UserRepository : JpaRepository<User, Int>, CustomUserRepository {
    fun findByUsername(username: String?): User
    fun findByAccountStatus(accountStatus: AccountStatus?): LinkedHashSet<User>
    override fun findByUsernameOrDisplayNameIgnoreCase(query: String): LinkedHashSet<User>
}
