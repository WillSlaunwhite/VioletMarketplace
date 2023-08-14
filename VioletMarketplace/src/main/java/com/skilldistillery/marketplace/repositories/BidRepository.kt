package com.skilldistillery.marketplace.repositories

import com.skilldistillery.marketplace.entities.Auction
import com.skilldistillery.marketplace.entities.Bid
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query

interface BidRepository : JpaRepository<Bid, Int> {
    fun queryById(id: Int): Bid

    @Query(value = "Select * from bid where buyer_id = ?1 or seller_id = ?1", nativeQuery = true)
    fun findByUser(userId: Int): Set<Bid> = emptySet()

    @Query(value = "Select * from bid where buyer_id = ?1", nativeQuery = true)
    fun findByBuyer(buyerId: Int): Set<Bid> = emptySet()

    @Query(value = "Select * from bid where seller_id = ?1", nativeQuery = true)
    fun findBySeller(sellerId: Int): Set<Bid> = emptySet()

    fun findTopByAuctionOrderByOfferAmountDesc(auctionId: Int): Bid
    fun findByAuction(auctionId: Int): Set<Bid> = emptySet()
}
