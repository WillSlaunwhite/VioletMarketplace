package com.skilldistillery.marketplace.services

import com.skilldistillery.marketplace.entities.Auction
import com.skilldistillery.marketplace.entities.Bid
import com.skilldistillery.marketplace.repositories.AuctionRepository
import com.skilldistillery.marketplace.repositories.BidRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class BidServiceImpl(
    private val bidRepo: BidRepository,
    private val auctionRepo: AuctionRepository
) : BidService {
    override fun userBids(userId: Int): Set<Bid> {
        return bidRepo.findByUser(userId)
    }

    override fun destroyBid(bidId: Int): Boolean {
        var confirm = false
        val bid = bidRepo.findById(bidId)
    if (bid.isPresent) {
            val realBid = bid.get()
            bidRepo.delete(realBid)
            confirm = true
        }
        return confirm
    }

    override fun placeBid(bid: Bid, auction: Auction): Bid {
        if (bid.offerAmount <= auction.currentHighestBid) {
            throw IllegalArgumentException("Bid must be higher than the current highest bid")
        }
        val savedBid = bidRepo.saveAndFlush(bid)
        auction.currentHighestBid = bid.offerAmount
        auctionRepo.save(auction)
        return bid
    }
}