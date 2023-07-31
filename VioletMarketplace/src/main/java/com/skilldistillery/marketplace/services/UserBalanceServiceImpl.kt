package com.skilldistillery.marketplace.services

import com.skilldistillery.marketplace.entities.UserCurrencyBalance
import com.skilldistillery.marketplace.entities.UserCurrencyBalanceKey
import com.skilldistillery.marketplace.enums.CurrencyType
import com.skilldistillery.marketplace.repositories.UserCurrencyBalanceRepository
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Service
import java.math.BigDecimal
import javax.transaction.Transactional

@Service
class UserBalanceServiceImpl(
    private val userCurrencyBalanceRepository: UserCurrencyBalanceRepository
) : UserBalanceService {
    @Transactional
    override fun credit(userId: Int, currencyType: CurrencyType, amount: BigDecimal): UserCurrencyBalance {
        val balance = userCurrencyBalanceRepository.findById_UserIdAndId_CurrencyType(userId, currencyType)
            ?: UserCurrencyBalance(UserCurrencyBalanceKey(userId, currencyType), BigDecimal.ZERO)
        balance.balance = balance.balance.add(amount)
        return userCurrencyBalanceRepository.saveAndFlush(balance)
    }

    @Transactional
    override fun debit(userId: Int, currencyType: CurrencyType, amount: BigDecimal): UserCurrencyBalance {
        val balance = userCurrencyBalanceRepository.findById_UserIdAndId_CurrencyType(userId, currencyType)
            ?: throw IllegalArgumentException("Insufficient Balance")
        if(balance.balance < amount) {
            throw IllegalArgumentException("Insufficient Balance")
        }
        balance.balance = balance.balance.subtract(amount)
        return userCurrencyBalanceRepository.saveAndFlush(balance)
    }

    override fun getBalance(userId: Int, currencyType: CurrencyType): UserCurrencyBalance {
        val balance = userCurrencyBalanceRepository.findById_UserIdAndId_CurrencyType(userId, currencyType)
        return balance ?: throw IllegalArgumentException("No balance found for user with id $userId and currency type $currencyType")
    }

    override fun getAllBalances(userId: Int): List<UserCurrencyBalance> {
        return userCurrencyBalanceRepository.findById_UserId(userId)
    }

}