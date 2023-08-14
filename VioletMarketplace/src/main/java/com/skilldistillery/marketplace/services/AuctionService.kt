package com.skilldistillery.marketplace.services

import com.skilldistillery.marketplace.entities.Auction

interface AuctionService {
    fun show(auctionId: Int): Auction
    fun showByUser(userId: Int): Set<Auction>
    fun create(auction: Auction): Auction
    fun delete(auction: Auction): Boolean
    fun auctionExists(aid: Int): Boolean
}