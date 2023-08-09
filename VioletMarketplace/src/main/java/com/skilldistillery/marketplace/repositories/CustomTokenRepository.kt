package com.skilldistillery.marketplace.repositories

import com.skilldistillery.marketplace.entities.Token
import com.skilldistillery.marketplace.enums.Status

interface CustomTokenRepository {
    fun findByIdOrThrow(id: Int): Token
    fun findByStatus(status: Status): Set<Token>
}