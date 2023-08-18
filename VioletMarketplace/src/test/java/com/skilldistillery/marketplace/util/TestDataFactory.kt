package com.skilldistillery.marketplace.util

import com.skilldistillery.marketplace.entities.*
import com.skilldistillery.marketplace.entities.Collection
import com.skilldistillery.marketplace.enums.AccountStatus
import com.skilldistillery.marketplace.enums.Rarity
import com.skilldistillery.marketplace.enums.Status
import java.math.BigDecimal
import java.time.LocalDate
import java.time.LocalDateTime

object TestDataFactory {
    fun mockBid(id: Int = 123, offerAmount: BigDecimal = BigDecimal("100.50")): Bid {
        return Bid(
            id = id,
            bidDate = LocalDateTime.now(),
            description = "Mock Bid",
            offerAmount = offerAmount,
            token = mockToken(),
            auction = mockAuction(),
            buyer = mockUser(id = 1, username = "mockbuyer"),
            seller = mockUser(id = 2, username = "mockseller")
        )
    }

    fun mockToken(id: Int = 4, name: String = "The Princess Bride"): Token {
        return Token(
            id = id,
            name = name,
            description = "Mock Description",
            price = 100,
            status = Status.AVAILABLE,
            rarity = Rarity.COMMON,
            releaseDate = LocalDate.now(),
            updatedOn = LocalDate.now(),
            tokenLocation = "Mock Token Location",
            collection = mockCollection(),
            creator = mockUser(id = 333, username = "mockcreator"),
            owner = mockUser(id = 4444, username = "mockownerusername")
        )
    }

    fun mockAuction(id: Int = 789, currentHighestBid: BigDecimal = BigDecimal("150.00")): Auction {
        return Auction(
            id = id,
            startPrice = BigDecimal("100.00"),
            currentHighestBid = currentHighestBid,
            ceilingPrice = BigDecimal("200.00"),
            startTime = LocalDateTime.now(),
            endTime = LocalDateTime.now().plusDays(1),
            status = Auction.AuctionStatus.ACTIVE,
            seller = mockUser(),
            token = mockToken()
        )
    }

    fun mockTransaction(id: Int = 999): Transaction {
        return Transaction(
            id = id,
            timestamp = LocalDateTime.now(),
            description = "Mock Transaction",
            type = "Mock Type",
            token = mockToken(),
            seller = mockUser(),
            buyer = mockUser(),
            auction = mockAuction(),
        )
    }

    fun mockUser(id: Int = 1, username: String = "mockuser"): User {
        return User(
            id = id,
            username = username,
            password = "mockpassword",
            accountStatus = AccountStatus.ACTIVE,
            role = "mockrole",
            email = "mockemail@domain.com",
            displayName = "Mock User",
            createdOn = LocalDateTime.now(),
            updatedOn = LocalDateTime.now()
        )
    }

    fun mockCollection(id: Int = 777): Collection {
        return Collection(
            id = id,
            description = "mock description",
            name = "mock name"
        )
    }

    fun mockBlock(id: Int = 555): Block {
        return Block(
            id = 777,
            hashCode = "mock hash code",
            prevHashCode = "mock prev hash code",
            transactions = setOf(mockTransaction(id = 555))
        )
    }
}