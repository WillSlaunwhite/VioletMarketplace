package com.skilldistillery.marketplace.dtos

import com.skilldistillery.marketplace.enums.Rarity
import com.skilldistillery.marketplace.enums.Status

data class CommonTokenDTO(
    val id: Int,
    val name: String,
    val description: String,
    val price: Int,
    val rarity: Rarity,
    val status: Status,
    val tokenLocation: String? = null
)
