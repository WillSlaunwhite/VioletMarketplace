package com.skilldistillery.marketplace.repositories;

import java.util.List;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.skilldistillery.marketplace.entities.Token;
import com.skilldistillery.marketplace.entities.TokenTx;

public interface TokenTxRepository extends JpaRepository<TokenTx, Integer>{

	List<TokenTx> index();
	TokenTx findById(int id);
	
	@Query(value="Select t from market_transfer t where t.buyer_id = ?1")
	List<TokenTx> findByBuyer(int buyerId);
	
	@Query(value="Select t from market_transfer t where t.seller_id = ?1")
	List<TokenTx> findBySeller(int sellerId);
	
}
