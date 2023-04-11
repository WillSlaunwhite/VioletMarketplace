package com.skilldistillery.marketplace.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.marketplace.entities.Bid;
import com.skilldistillery.marketplace.entities.TokenTx;
import com.skilldistillery.marketplace.repositories.BidRepository;
import com.skilldistillery.marketplace.repositories.TokenTxRepository;
import com.skilldistillery.marketplace.repositories.UserRepository;

@Service
public class TokenTxServiceImpl implements TokenTxService {
	@Autowired
	private TokenTxRepository tokenRepo;

	@Autowired
	private UserRepository userRepo;
	@Autowired
	private BidRepository bidRepo;

		@Override
		public List<TokenTx> userIndex(int userId) {
			List<TokenTx> transfers = tokenRepo.findByUser(userId);

			return transfers;
	}
	public TokenTx show(int tokenTxId) {
		TokenTx toShow = tokenRepo.queryById(tokenTxId);
		return toShow;
	}
	@Override
	public List<TokenTx> buyerTransfers(int buyerId) {
		List<TokenTx> buyerTransfers = tokenRepo.findByBuyer(buyerId);
		return buyerTransfers;
	}
	@Override
	public List<TokenTx> sellerTransfers(int sellerId) {
		List<TokenTx> sellerTransfers = tokenRepo.findBySeller(sellerId);
		return sellerTransfers;
	}
	@Override
	public TokenTx create(TokenTx transfer) {
		TokenTx newTransfer = transfer;
		if (newTransfer != null) {
			tokenRepo.saveAndFlush(newTransfer);
		}
		return newTransfer;
	}

	// --------- BID METHODS BELOW ------------
	@Override
	public List<Bid> userBids(int userId) {
		return bidRepo.findByUser(userId);
	}
	@Override
	public boolean destroyBid(int bidId) {
		boolean confirm = false;
		Optional<Bid> bid = bidRepo.findById(bidId);
		if(bid.isPresent()) {
		Bid realBid = bid.get();
		bidRepo.delete(realBid);
		confirm = true;
		}
		return confirm;

	}
	@Override
	public Bid create(Bid bid) {
		Bid newBid = bid;
		if (newBid != null) {
			bidRepo.saveAndFlush(newBid);
		}
		return newBid;
	}
//	@Override
//	public Token create(String username, Token token) {
//		// TODO Auto-generated method stub
//		return null;
//	}
//
//	@Override
//	public Set<Token> index(String username) {
//		// TODO Auto-generated method stub
//		return null;
//	}
//
//	@Override
//	public boolean destroy(String username, int tid) {
//		// TODO Auto-generated method stub
//		return false;
//	}
//
//	@Override
//	public Token update(String ownerName, String buyerName, int tid, Token token) {
//		// TODO Auto-generated method stub
//		return null;
//	}
//
//
//
}
