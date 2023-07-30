package com.skilldistillery.marketplace.services

import com.skilldistillery.marketplace.enums.CurrencyType
import org.springframework.http.ResponseEntity
import java.math.BigDecimal

interface UserBalanceService {
    fun credit(userId: Int, currencyType: CurrencyType, amount: BigDecimal)
    fun debit(userId: Int, currencyType: CurrencyType, amount: BigDecimal)
    fun getBalance(userId: Int, currencyType: CurrencyType) : BigDecimal
    fun getAllBalances(userId: Int) : List<BigDecimal>
}