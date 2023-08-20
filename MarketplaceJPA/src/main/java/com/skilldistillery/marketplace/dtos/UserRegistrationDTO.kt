package com.skilldistillery.marketplace.dtos

import com.skilldistillery.marketplace.entities.User
import com.skilldistillery.marketplace.enums.AccountStatus
import java.time.LocalDateTime

data class UserRegistrationDTO(
    val username: String,
    val password: String,
    val displayName: String? = null,
    val email: String,
    val biography: String? = null,
    val pictureUrl: String? = null,
)

fun UserRegistrationDTO.toUserEntity(): User {
    return User(
        username = this.username,
        password = this.password,
        displayName = this.displayName ?: this.username,
        email = this.email,
        biography = this.biography,
        pictureUrl = this.pictureUrl,
        accountStatus = AccountStatus.ACTIVE,
        role = "user",
        createdOn = LocalDateTime.now(),
        updatedOn = LocalDateTime.now(),
    )
}
