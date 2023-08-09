package com.skilldistillery.marketplace.dtos

data class CommonUserDTO(
    val id: Int,
    val username: String,
    val displayName: String? = null,
    val email: String,
    val biography: String? = null,
    val pictureUrl: String? = null
)
