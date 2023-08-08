package com.skilldistillery.marketplace.controllers

import com.skilldistillery.marketplace.entities.TokenTx
import com.skilldistillery.marketplace.services.TokenTxService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse

@RestController
@RequestMapping("api")
@CrossOrigin("*", "http://localhost:4301")
class TokenTxController {
    @Autowired
    private val txSvc: TokenTxService? = null

    /*
     * THIS IS THE TOKEN ** TX ** CONTROLLER. ENSURE YOU MEANT TO BE HERE AND NOT
     * THE TOKEN CONTROLLER
     */
    /////////////// GET METHODS ///////////////////
    // GET ALL TRANSFERS WHERE USER IS SELLER
    @GetMapping("transfers/seller/{userId}")
    fun sellerTransferRecord(
        req: HttpServletRequest?, resp: HttpServletResponse?,
        @PathVariable userId: Int
    ): ResponseEntity<Set<TokenTx>> {
        return try {
            val txList = txSvc!!.sellerTransfers(userId)
            if (txList.isEmpty()) {
                ResponseEntity.notFound().build()
            } else ResponseEntity.ok(txList)
        } catch (e: Exception) {
            ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build()
        }
    }

    // GET ALL TRANSFERS WHERE USER IS BUYER
    @GetMapping("transfers/buyer/{userId}")
    fun buyerTransferRecord(
        req: HttpServletRequest?, resp: HttpServletResponse?,
        @PathVariable userId: Int
    ): ResponseEntity<Set<TokenTx>> {
        return try {
            val txList = txSvc!!.buyerTransfers(userId)
            if (txList.isEmpty()) {
                ResponseEntity.notFound().build()
            } else ResponseEntity.ok(txList)
        } catch (e: Exception) {
            ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build()
        }
    }

    // GET ALL TRANSFERS FOR USER REGARDLESS OF ROLE
    @GetMapping("transfers/{userId}")
    fun index(
        req: HttpServletRequest?, resp: HttpServletResponse?,
        @PathVariable userId: Int
    ): ResponseEntity<Set<TokenTx>> {
        return try {
            val txList = txSvc!!.userIndex(userId)
            if (txList.isEmpty()) {
                ResponseEntity.notFound().build()
            } else ResponseEntity.ok(txList)
        } catch (e: Exception) {
            ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build()
        }
    }

    /////////////// POST METHODS ///////////////////
    // POST NEW TRANSFER
    @PostMapping("transfers")
    fun create(
        req: HttpServletRequest?, resp: HttpServletResponse?,
        @RequestBody transfer: TokenTx?
    ): ResponseEntity<TokenTx> {
        return try {
            if (transfer == null) {
                return ResponseEntity.badRequest().build()
            }
            txSvc!!.create(transfer)
            ResponseEntity.status(HttpStatus.CREATED).body(transfer)
        } catch (e: Exception) {
            ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build()
        }
    }
}
