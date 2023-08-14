package com.skilldistillery.marketplace.services

import com.skilldistillery.marketplace.entities.Bid

interface BidService {
    fun userBids(userId: Int): List<Bid?>?
    fun destroyBid(bidId: Int): Boolean
    fun create(bid: Bid?): Bid?
}
