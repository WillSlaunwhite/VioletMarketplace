package com.skilldistillery.marketplace.services;

import java.util.List;

import com.skilldistillery.marketplace.entities.Bid;
import com.skilldistillery.marketplace.entities.TokenTx;

public interface TokenTxService {
	
	List<Bid> userBids(int userId);
	TokenTx show(int transferId);
	
	List<TokenTx> buyerTransfers(int buyerId);
	List<TokenTx> sellerTransfers(int sellerId);

	TokenTx create(TokenTx transfer);

	List<TokenTx> userIndex(int userId);
	boolean destroyBid(int bidId);
	Bid create(Bid bid);
	
}
