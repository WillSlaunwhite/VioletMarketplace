package com.skilldistillery.marketplace.services

import com.skilldistillery.marketplace.entities.Transaction

interface TransactionService {
    fun show(transferId: Int): Transaction
    fun buyerTransfers(buyerId: Int): Set<Transaction>
    fun sellerTransfers(sellerId: Int): Set<Transaction>
    fun create(transfer: Transaction): Transaction
    fun userIndex(userId: Int): Set<Transaction>
    fun destroy(transaction: Transaction): Boolean
    fun transactionExists(tid: Int): Boolean
    fun isUsersTransaction(userId: Int, tid: Int): Boolean
}
