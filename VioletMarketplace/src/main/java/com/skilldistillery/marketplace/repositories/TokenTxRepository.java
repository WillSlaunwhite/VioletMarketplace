package com.skilldistillery.marketplace.repositories;

import java.util.List;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.skilldistillery.marketplace.entities.TokenTx;

public interface TokenTxRepository extends JpaRepository<TokenTx, Integer>{

	TokenTx queryById(int id);
	
	@Query(value="Select from market_transfer where buyer_id = ?1",
			nativeQuery=true)
	List<TokenTx> findByBuyer(int buyerId);
	
	@Query(value="Select t from market_transfer t where t.seller_id = ?1",
			nativeQuery=true)
	List<TokenTx> findBySeller(int sellerId);
	
}
