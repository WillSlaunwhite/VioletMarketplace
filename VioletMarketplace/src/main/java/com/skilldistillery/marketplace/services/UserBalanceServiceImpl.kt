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
    override fun credit(userId: Int, currencyType: CurrencyType, amount: BigDecimal) {
        val balance = userCurrencyBalanceRepository.findById_UserIdAndId_CurrencyType(userId, currencyType)
            ?: UserCurrencyBalance(UserCurrencyBalanceKey(userId, currencyType), BigDecimal.ZERO)
        balance.balance = balance.balance.add(amount)
        userCurrencyBalanceRepository.saveAndFlush(balance)
    }

    @Transactional
    override fun debit(userId: Int, currencyType: CurrencyType, amount: BigDecimal) {
        val balance = userCurrencyBalanceRepository.findById_UserIdAndId_CurrencyType(userId, currencyType)
            ?: throw IllegalArgumentException("Insufficient Balance")
        if(balance.balance < amount) {
            throw IllegalArgumentException("Insufficient Balance")
        }
        balance.balance = balance.balance.subtract(amount)
        userCurrencyBalanceRepository.saveAndFlush(balance)
    }

    @Transactional
    override fun getBalance(userId: Int, currencyType: CurrencyType): BigDecimal {
        val balance = userCurrencyBalanceRepository.findById_UserIdAndId_CurrencyType(userId, currencyType)
        return balance?.balance ?: BigDecimal.ZERO
    }

    @Transactional
    override fun getAllBalances(userId: Int): List<BigDecimal> {
        val balances: List<UserCurrencyBalance> = userCurrencyBalanceRepository.findById_UserId(userId)
        val decBalances: MutableList<BigDecimal> = mutableListOf()
        if(balances.isNotEmpty()) {
            for(balance in balances) {
                decBalances.add(balance.balance)
            }
        }
        return decBalances
    }
}