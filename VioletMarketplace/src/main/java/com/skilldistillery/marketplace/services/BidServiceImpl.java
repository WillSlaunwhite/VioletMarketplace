package com.skilldistillery.marketplace.services;

import com.skilldistillery.marketplace.entities.Bid;
import com.skilldistillery.marketplace.repositories.BidRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BidServiceImpl implements BidService {
    @Autowired
    private BidRepository bidRepo;

    @Override
    public List<Bid> userBids(int userId) {
        return bidRepo.findByUser(userId);
    }

    @Override
    public boolean destroyBid(int bidId) {
        boolean confirm = false;
        Optional<Bid> bid = bidRepo.findById(bidId);
        if (bid.isPresent()) {
            Bid realBid = bid.get();
            bidRepo.delete(realBid);
            confirm = true;
        }
        return confirm;

    }

    @Override
    public Bid create(Bid bid) {
        if (bid != null) {
            bidRepo.saveAndFlush(bid);
        }
        return bid;
    }
}
