package com.skilldistillery.marketplace.repositories

import com.skilldistillery.marketplace.entities.Transaction
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.query.Param

interface TransactionRepository : JpaRepository<Transaction, Int> {
    fun queryById(id: Int): Transaction

    @Query(value = "Select * from market_transfer where buyer_id = 1 or seller_id = ?1", nativeQuery = true)
    fun findByUser(userId: Int): Set<Transaction>

    @Query(value = "Select * from market_transfer where buyer_id = 1", nativeQuery = true)
    fun findByBuyer(buyerId: Int): Set<Transaction>

    @Query(value = "Select * from market_transfer where seller_id = 1", nativeQuery = true)
    fun findBySeller(sellerId: Int): Set<Transaction>

    @Query(value = "SELECT count(t) > 0 FROM market_transfer where t.seller.id = :sellerId AND t.id = :transactionId", nativeQuery = true)
    fun isUsersTransaction(@Param("sellerId") sellerId: Int, @Param("transactionId") transactionId: Int): Boolean
}
