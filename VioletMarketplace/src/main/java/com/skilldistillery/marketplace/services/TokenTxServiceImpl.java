package com.skilldistillery.marketplace.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.marketplace.entities.TokenTx;
import com.skilldistillery.marketplace.repositories.TokenTxRepository;

@Service
public class TokenTxServiceImpl implements TokenTxService {
    @Autowired
    private TokenTxRepository tokenRepo;

    @Override
    public List<TokenTx> userIndex(int userId) {

        return tokenRepo.findByUser(userId);
    }

    public TokenTx show(int tokenTxId) {
        return tokenRepo.queryById(tokenTxId);
    }

    @Override
    public List<TokenTx> buyerTransfers(int buyerId) {
        return tokenRepo.findByBuyer(buyerId);
    }

    @Override
    public List<TokenTx> sellerTransfers(int sellerId) {
        return tokenRepo.findBySeller(sellerId);
    }

    @Override
    public TokenTx create(TokenTx transfer) {
        if (transfer != null) {
            tokenRepo.saveAndFlush(transfer);
        }
        return transfer;
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
