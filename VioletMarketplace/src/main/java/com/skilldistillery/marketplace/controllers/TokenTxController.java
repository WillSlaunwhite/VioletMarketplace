package com.skilldistillery.marketplace.controllers;

import java.security.Principal;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.marketplace.entities.Bid;
import com.skilldistillery.marketplace.entities.Token;
import com.skilldistillery.marketplace.entities.TokenTx;
import com.skilldistillery.marketplace.services.TokenTxService;

@RestController
@RequestMapping("api")
@CrossOrigin({ "*", "http://localhost:4301" })
public class TokenTxController {
	
	@Autowired
	private TokenTxService txSvc;

	/*
	 * THIS IS THE TOKEN ** TX ** CONTROLLER. ENSURE YOU MEANT TO BE HERE AND NOT
	 * THE TOKEN CONTROLLER
	 */
	
	/////////////// GET METHODS ///////////////////

//	GET ALL TRANSFERS WHERE USER IS SELLER
	@GetMapping("transfers/seller/{userId}")
	public List<TokenTx> sellerTransferRecord(HttpServletRequest req, HttpServletResponse resp,
			@PathVariable int userId) {
		return txSvc.sellerTransfers(userId);
	}

	// GET ALL TRANSFERS WHERE USER IS BUYER
	@GetMapping("transfers/buyer/{userId}")
	public List<TokenTx> buyerTransferRecord(HttpServletRequest req, HttpServletResponse resp,
			@PathVariable int userId) {
		return txSvc.sellerTransfers(userId);
	}

//		GET ALL TRANSFERS FOR USER REGARDLESS OF ROLE 
	@GetMapping("transfers/{userId}")
	public List<TokenTx> index(HttpServletRequest req, HttpServletResponse resp, @PathVariable int userId) {
		return txSvc.userIndex(userId);
	}

	/////////////// POST METHODS ///////////////////

//	POST NEW TRANSFER
	@PostMapping("transfers")
	public TokenTx create(HttpServletRequest req, HttpServletResponse resp, @RequestBody TokenTx transfer) {
		txSvc.create(transfer);
		if (transfer == null) {
			resp.setStatus(404);
		}
		return transfer;
	}


}
