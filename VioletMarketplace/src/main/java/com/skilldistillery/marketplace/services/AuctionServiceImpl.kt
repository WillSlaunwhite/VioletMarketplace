package com.skilldistillery.marketplace.services

import com.skilldistillery.marketplace.entities.Auction
import com.skilldistillery.marketplace.repositories.AuctionRepository
import org.springframework.stereotype.Service

@Service
class AuctionServiceImpl(private val auctionRepository: AuctionRepository): AuctionService {
    override fun show(auctionId: Int): Auction {
        return auctionRepository.queryById(auctionId)
    }

    override fun showByUser(userId: Int): Set<Auction> {
        return auctionRepository.findBySeller(userId)
    }

    override fun create(auction: Auction): Auction {
        return auctionRepository.saveAndFlush(auction)
    }

    override fun delete(auction: Auction): Boolean {
        var deleted = false
        auctionRepository.delete(auction)
        deleted = true
        return deleted
    }

    override fun auctionExists(aid: Int): Boolean {
        return auctionRepository.existsById(aid)
    }
}