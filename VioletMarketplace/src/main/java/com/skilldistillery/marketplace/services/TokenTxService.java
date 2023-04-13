package com.skilldistillery.marketplace.services;

import java.util.Set;

import com.skilldistillery.marketplace.entities.TokenTx;

public interface TokenTxService {
	
	TokenTx show(int transferId);
	
	Set<TokenTx> buyerTransfers(int buyerId);
	Set<TokenTx> sellerTransfers(int sellerId);

	TokenTx create(TokenTx transfer);

	Set<TokenTx> userIndex(int userId);

	
}
