package com.skilldistillery.marketplace.controllers

import com.skilldistillery.marketplace.enums.CurrencyType
import com.skilldistillery.marketplace.services.UserBalanceServiceImpl
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import java.math.BigDecimal

@RestController
@RequestMapping("/api/user-balance")
class UserBalanceController(private val userBalanceService: UserBalanceServiceImpl) {

    @PostMapping("/credit")
    fun credit(@RequestParam userId: Int, @RequestParam currencyType: CurrencyType, @RequestParam amount: BigDecimal) {
        userBalanceService.credit(userId, currencyType, amount)
    }

    @PostMapping("/debit")
    fun debit(@RequestParam userId: Int, @RequestParam currencyType: CurrencyType, @RequestParam amount: BigDecimal) {
        userBalanceService.debit(userId, currencyType, amount)
    }

    @GetMapping("/{userId}/balance/{currencyType}")
    fun getBalance(@PathVariable userId: Int, @PathVariable currencyType: CurrencyType): ResponseEntity<BigDecimal> {
        val balance = userBalanceService.getBalance(userId, currencyType)
        return ResponseEntity.ok(balance)
    }


    @GetMapping("/{userId}/balance")
    fun getAllBalance(@PathVariable userId: Int): ResponseEntity<List<BigDecimal>> {
        val balances: List<BigDecimal> = userBalanceService.getAllBalances(userId)
        return ResponseEntity.ok(balances)
    }
}