package com.skilldistillery.marketplace.services

import com.skilldistillery.marketplace.dtos.TokenUpdateRequest
import com.skilldistillery.marketplace.entities.Token

interface TokenService {
    fun index(): Set<Token>
    fun indexByUsername(username: String): Set<Token>
    fun findById(tid: Int): Token
    fun create(username: String, token: Token): Token
    fun purchase(buyerName: String, tid: Int): Token
    fun update(ownerName: String, request: TokenUpdateRequest): Token
    fun destroy(username: String, tid: Int): Boolean
    fun tokenExists(tid: Int): Boolean
    fun userOwnsToken(username: String, tid: Int): Boolean
}
