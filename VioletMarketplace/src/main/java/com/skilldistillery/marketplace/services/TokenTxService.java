package com.skilldistillery.marketplace.services;

import java.util.List;
import java.util.Set;

import com.skilldistillery.marketplace.entities.Token;
import com.skilldistillery.marketplace.entities.TokenTx;

public interface TokenTxService {
	
	public List<TokenTx> index();

	public TokenTx show(int transferId);
	
	public List<TokenTx> buyerTransfers(int buyerId);
	public List<TokenTx> sellerTransfers(int sellerId);

	public TokenTx create(TokenTx transfer);
	
}
