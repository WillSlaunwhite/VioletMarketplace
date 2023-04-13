package com.skilldistillery.marketplace.services;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.marketplace.entities.TokenTx;
import com.skilldistillery.marketplace.repositories.TokenTxRepository;

@Service
public class TokenTxServiceImpl implements TokenTxService {
    @Autowired
    private TokenTxRepository tokenRepo;

    @Override
    public Set<TokenTx> userIndex(int userId) {

        return tokenRepo.findByUser(userId);
    }

    public TokenTx show(int tokenTxId) {
        return tokenRepo.queryById(tokenTxId);
    }

    @Override
    public Set<TokenTx> buyerTransfers(int buyerId) {
        return tokenRepo.findByBuyer(buyerId);
    }

    @Override
    public Set<TokenTx> sellerTransfers(int sellerId) {
        return tokenRepo.findBySeller(sellerId);
    }

    @Override
    public TokenTx create(TokenTx transfer) {
        if (transfer != null) {
            tokenRepo.saveAndFlush(transfer);
        }
        return transfer;
    }

}
