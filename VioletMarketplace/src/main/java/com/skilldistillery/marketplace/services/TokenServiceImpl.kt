package com.skilldistillery.marketplace.services

import com.skilldistillery.marketplace.dtos.CommonTokenDTO
import com.skilldistillery.marketplace.dtos.CommonUserDTO
import com.skilldistillery.marketplace.dtos.TokenUpdateRequest
import com.skilldistillery.marketplace.entities.Token
import com.skilldistillery.marketplace.entities.User
import com.skilldistillery.marketplace.enums.Status
import com.skilldistillery.marketplace.exceptions.AuthorizationException
import com.skilldistillery.marketplace.repositories.TokenRepository
import com.skilldistillery.marketplace.repositories.TokenTxRepository
import com.skilldistillery.marketplace.repositories.UserRepository
import org.springframework.stereotype.Service
import java.time.LocalDate
import javax.transaction.Transactional

@Service
class TokenServiceImpl(
    private val tokenRepo: TokenRepository,
    private val userRepo: UserRepository,
    private val txRepository: TokenTxRepository
) : TokenService {
    override fun index(): Set<Token> {
        return tokenRepo.findByStatus(Status.AVAILABLE)
    }

    override fun indexByUsername(username: String): LinkedHashSet<Token> {
        return (tokenRepo.findByOwner_Username(username))
    }

    override fun findById(tid: Int): Token {
        return tokenRepo.findByIdOrThrow(tid)
    }

    @Transactional
    override fun create(username: String, token: Token): Token {
        val user = userRepo.findByUsernameOrThrow(username)
        token.creator = user
        token.owner = user
        //		token.setCollection(collectionRepo.findById(1));
        token.transfers = txRepository.findAll() // every token has every transaction
        tokenRepo.saveAndFlush(token)
        return token
    }

    @Transactional
    override fun update(ownerName: String, request: TokenUpdateRequest): Token {
        val existingToken: Token = tokenRepo.findByIdOrThrow(request.tokenId)
        if (existingToken.owner.username != ownerName) {
            throw AuthorizationException("User does not have permission to update this token.")
        }
        existingToken.id = request.tokenId
        existingToken.name = request.name
        existingToken.description = request.description
        existingToken.updatedOn = LocalDate.now()
        existingToken.status = request.status
        existingToken.price = request.price
        existingToken.rarity = request.rarity
        existingToken.tokenLocation = request.tokenLocation
        existingToken.collection = request.collection
        tokenRepo.saveAndFlush(existingToken)
        return existingToken
    }

    @Transactional
    override fun purchase(buyerName: String, tid: Int): Token {
        val existingToken: Token = tokenRepo.findByIdOrThrow(tid)
        val buyer = userRepo.findByUsernameOrThrow(buyerName)
        if (existingToken.owner == buyer) {
            throw AuthorizationException("User already owns this token.")
        }
        existingToken.owner = buyer
        tokenRepo.saveAndFlush(existingToken)
        return existingToken
    }

    @Transactional
    override fun destroy(username: String, tid: Int): Boolean {
        var deleted = false
        val token = tokenRepo.findByIdOrThrow(tid)
        if (userOwnsToken(username, tid)) {
            tokenRepo.delete(token)
            deleted = true
        }
        return deleted
    }

    override fun tokenExists(tid: Int): Boolean {
        return tokenRepo.existsById(tid)
    }

    override fun userOwnsToken(username: String, tid: Int): Boolean {
        return tokenRepo.userOwnsToken(username, tid)
    }



}
