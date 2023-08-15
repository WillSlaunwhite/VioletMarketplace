package com.skilldistillery.marketplace.services

import com.skilldistillery.marketplace.entities.Bid
import com.skilldistillery.marketplace.entities.Token
import com.skilldistillery.marketplace.enums.Rarity
import com.skilldistillery.marketplace.enums.Status
import com.skilldistillery.marketplace.repositories.AuctionRepository
import com.skilldistillery.marketplace.repositories.BidRepository
import com.skilldistillery.marketplace.util.TestDataFactory
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.mockito.InjectMocks
import org.mockito.Mock
import org.mockito.MockitoAnnotations
import java.math.BigDecimal
import java.time.LocalDateTime

class BidServiceImplTest {

    @InjectMocks
    lateinit var bidsService: BidServiceImpl

    @Mock
    lateinit var bidRepo: BidRepository

    @Mock
    lateinit var auctionRepo: AuctionRepository

    @BeforeEach
    fun setUp() {
        MockitoAnnotations.initMocks(this)
    }

    @Test
    fun `test userBids`() {
        val mockUser = TestDataFactory.mockUser()
        val mockToken = TestDataFactory.mockToken()
        val mockTransaction = TestDataFactory.mockTransaction()
        val mockBid = TestDataFactory.mockBid(id = 333, offerAmount = BigDecimal.valueOf(555.55))

        val mockBids = setOf( mockBid )
    }

}