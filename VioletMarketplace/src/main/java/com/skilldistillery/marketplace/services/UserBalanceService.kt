package com.skilldistillery.marketplace.services

import com.skilldistillery.marketplace.entities.UserCurrencyBalance
import com.skilldistillery.marketplace.enums.CurrencyType
import org.springframework.http.ResponseEntity
import java.math.BigDecimal

interface UserBalanceService {
    fun credit(userId: Int, currencyType: CurrencyType, amount: BigDecimal): UserCurrencyBalance
    fun debit(userId: Int, currencyType: CurrencyType, amount: BigDecimal): UserCurrencyBalance
    fun getBalance(userId: Int, currencyType: CurrencyType) : UserCurrencyBalance
    fun getAllBalances(userId: Int) : List<UserCurrencyBalance>
}