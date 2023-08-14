package com.skilldistillery.marketplace.services

import com.skilldistillery.marketplace.entities.Bid
import com.skilldistillery.marketplace.repositories.BidRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class BidServiceImpl(
    private val bidRepo: BidRepository
) : BidService {
    override fun userBids(userId: Int): List<Bid> {
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

    override fun create(bid: Bid): Bid {
        return bidRepo.saveAndFlush(bid)
    }
}
