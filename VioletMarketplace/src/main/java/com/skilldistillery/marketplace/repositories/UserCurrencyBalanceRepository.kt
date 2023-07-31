package com.skilldistillery.marketplace.repositories

import com.skilldistillery.marketplace.entities.UserCurrencyBalance
import com.skilldistillery.marketplace.entities.UserCurrencyBalanceKey
import com.skilldistillery.marketplace.enums.CurrencyType
import org.springframework.data.jpa.repository.JpaRepository

interface UserCurrencyBalanceRepository : JpaRepository<UserCurrencyBalance, UserCurrencyBalanceKey> {
    fun findById_UserId(userId: Int): List<UserCurrencyBalance>

    fun findById_UserIdAndId_CurrencyType(userId: Int, currencyType: CurrencyType): UserCurrencyBalance?
}