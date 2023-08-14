package com.skilldistillery.marketplace.services

import com.skilldistillery.marketplace.entities.Transaction
import com.skilldistillery.marketplace.repositories.TransactionRepository
import org.springframework.stereotype.Service

@Service
class TransactionServiceImpl(
    private val transactionRepo: TransactionRepository
) : TransactionService {
    override fun userIndex(userId: Int): Set<Transaction> {
        return transactionRepo.findByUser(userId)
    }

    override fun destroy(transaction: Transaction): Boolean {
        var deleted = false
        transactionRepo.delete(transaction)
        deleted = true
        return deleted
    }

    override fun show(transferId: Int): Transaction {
        return transactionRepo.queryById(transferId)
    }

    override fun buyerTransfers(buyerId: Int): Set<Transaction> {
        return transactionRepo.findByBuyer(buyerId)
    }

    override fun sellerTransfers(sellerId: Int): Set<Transaction> {
        return transactionRepo.findBySeller(sellerId)
    }

    override fun create(transfer: Transaction): Transaction {
        return transactionRepo.saveAndFlush(transfer)
    }

    override fun transactionExists(tid: Int): Boolean {
        return transactionRepo.existsById(tid)
    }

    override fun isUsersTransaction(userId: Int, tid: Int): Boolean {
        return transactionRepo.isUsersTransaction(userId, tid)
    }
}
