package com.skilldistillery.marketplace.dtos

import com.skilldistillery.marketplace.entities.User

data class CommonUserDTO(
    val id: Int,
    val username: String,
    val displayName: String? = null,
    val email: String,
    val biography: String? = null,
    val pictureUrl: String? = null
)

fun User.toCommonDTO(): CommonUserDTO {
    return CommonUserDTO(
        this.id,
        this.username,
        this.displayName,
        this.email,
        this.biography,
        this.pictureUrl,
    )
}
