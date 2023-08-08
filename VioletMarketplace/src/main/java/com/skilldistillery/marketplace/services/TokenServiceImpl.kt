package com.skilldistillery.marketplace.services

import com.skilldistillery.marketplace.dto.TokenUpdateRequest
import com.skilldistillery.marketplace.entities.Token
import com.skilldistillery.marketplace.enums.Status
import com.skilldistillery.marketplace.exceptions.AuthorizationException
import com.skilldistillery.marketplace.exceptions.TokenNotFoundException
import com.skilldistillery.marketplace.exceptions.UserNotFoundException
import com.skilldistillery.marketplace.repositories.TokenRepository
import com.skilldistillery.marketplace.repositories.TokenTxRepository
import com.skilldistillery.marketplace.repositories.UserRepository
import org.springframework.stereotype.Service
import java.time.LocalDate

@Service
class TokenServiceImpl(private val tokenRepo: TokenRepository, private val userRepo: UserRepository, private val txRepository: TokenTxRepository) : TokenService {
    override fun index(): MutableSet<Token?> {
        return tokenRepo!!.findByStatus(Status.AVAILABLE) as MutableSet<Token?>
    }

    override fun indexByUsername(username: String): MutableSet<Token?>? {
        val userTokens: MutableSet<Token?> = tokenRepo?.findByOwner_Username(username)
            ?: throw UserNotFoundException("User with username $username not found.")
        return tokenRepo!!.findByOwner_Username(username)
    }

    override fun findById(tid: Int): Token? {
        return tokenRepo?.findById(tid)
            ?: throw TokenNotFoundException("Token with id $tid not found.")
    }

    override fun create(username: String, token: Token): Token {
        val user = userRepo!!.findByUsername(username)
            ?: throw UserNotFoundException("User with username $username not found.")
        token.creator = user
        token.owner = user
        //		token.setCollection(collectionRepo.findById(1));
        token.transfers = txRepository!!.findAll() // every token has every transaction
        tokenRepo!!.saveAndFlush(token)
        return token
    }

    override fun update(ownerName: String, request: TokenUpdateRequest): Token {
        val existingToken: Token = tokenRepo?.findById(request.tokenId)
            ?: throw TokenNotFoundException("Token with id " + request.tokenId + " not found.")
        val owner = userRepo!!.findByUsername(ownerName)
        if (!owner.equals(existingToken.owner)) {
            throw AuthorizationException("User does not have permission to update this token.")
        }
        existingToken.id = request.tokenId
        existingToken.name = request.name
        existingToken.setDescription(request.description)
        existingToken.updatedOn = LocalDate.now()
        existingToken.status = request.status
        existingToken.price = request.price
        existingToken.rarity = request.rarity
        existingToken.tokenLocation = request.tokenLocation
        existingToken.collection = request.collection
        tokenRepo.saveAndFlush(existingToken)
        return existingToken
    }

    override fun purchase(buyerName: String, tid: Int): Token {
        val existingToken: Token = tokenRepo?.findById(tid)
            ?: throw TokenNotFoundException("Token with id $tid not found.")
        val buyer = userRepo!!.findByUsername(buyerName)
        if (buyer.equals(existingToken.owner)) {
            throw AuthorizationException("User already owns this token.")
        }
        existingToken.owner = buyer
        tokenRepo!!.saveAndFlush(existingToken)
        return existingToken
    }

    override fun destroy(username: String, tid: Int): Boolean {
        var deleted = false
        val token = tokenRepo!!.findByOwner_UsernameAndId(username, tid)
        if (token != null) {
            tokenRepo.delete(token)
            deleted = true
        }
        return deleted
    }

    override fun tokenExists(tid: Int): Boolean {
        return tokenRepo!!.existsById(tid)
    }

    override fun userOwnsToken(username: String, tid: Int): Boolean {
        val token = tokenRepo!!.findByOwner_UsernameAndId(username, tid)
        return token != null
    }
}
