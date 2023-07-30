package com.skilldistillery.marketplace.repositories

import com.skilldistillery.marketplace.entities.UserCurrencyBalance
import com.skilldistillery.marketplace.entities.UserCurrencyBalanceKey
import com.skilldistillery.marketplace.enums.CurrencyType
import org.springframework.data.jpa.repository.JpaRepository

interface UserCurrencyBalanceRepository : JpaRepository<UserCurrencyBalance, UserCurrencyBalanceKey> {
    fun findByUserId(userId: Int): List<UserCurrencyBalance>

    fun findByUserIdAndCurrencyType(userId: Int, currencyType: CurrencyType): UserCurrencyBalance?
}