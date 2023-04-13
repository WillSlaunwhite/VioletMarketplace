package com.skilldistillery.marketplace.services;

import com.skilldistillery.marketplace.entities.Bid;

import java.util.List;

public interface BidService {

    List<Bid> userBids(int userId);

    boolean destroyBid(int bidId);

    Bid create(Bid bid);
}
