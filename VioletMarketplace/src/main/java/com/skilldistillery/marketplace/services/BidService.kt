package com.skilldistillery.marketplace.services

import com.skilldistillery.marketplace.entities.Auction
import com.skilldistillery.marketplace.entities.Bid

interface BidService {
    fun userBids(userId: Int): Set<Bid>
    fun destroyBid(bidId: Int): Boolean
    fun placeBid(bid: Bid, auction: Auction): Bid
}
