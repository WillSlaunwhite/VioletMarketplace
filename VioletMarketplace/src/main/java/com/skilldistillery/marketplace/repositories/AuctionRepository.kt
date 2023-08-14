package com.skilldistillery.marketplace.repositories

import com.skilldistillery.marketplace.entities.Auction
import com.skilldistillery.marketplace.entities.Transaction
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface AuctionRepository : JpaRepository<Auction, Int> {

    fun queryById(id: Int): Auction
    fun findBySeller(sellerId: Int): Set<Auction>
    fun findByToken(tokenId: Int): Set<Auction>
}