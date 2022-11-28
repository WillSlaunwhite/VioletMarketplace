package com.skilldistillery.marketplace.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.marketplace.entities.Bid;
import com.skilldistillery.marketplace.services.TokenTxService;

@RestController
@RequestMapping("api")
@CrossOrigin({ "*", "http://localhost:4301" })
public class BidController {

	@Autowired
	private TokenTxService txSvc;


	
	/////////////// GET METHODS ///////////////////

	
	
	///// GET ALL BIDS FOR A TOKEN
	@GetMapping("bids/{tokenId}")
	public List<Bid> tokenBids(HttpServletRequest req, HttpServletResponse resp, @PathVariable int tokenId) {
		return txSvc.userBids(tokenId);
	}

	///// GET A ALL BIDS FOR A USER
	@GetMapping("bids/{userId}")
	public List<Bid> userBids(HttpServletRequest req, HttpServletResponse resp, @PathVariable int userId) {
		return txSvc.userBids(userId);
	}

	
	
	/////////////// PUT METHODS ///////////////////
	
	
	
	
	
	
	/////////////// POST METHODS ///////////////////

	
	
	// POST NEW BID
	@PostMapping("bids")
	public Bid create(HttpServletRequest req, HttpServletResponse resp, @RequestBody Bid bid) {
		txSvc.create(bid);
		if (bid == null) {
			resp.setStatus(404);
		}
		return bid;
	}
	
	
	
	/////////////// DELETE METHODS ///////////////////
	
	
	
	//	DELETE BID BY BID ID
	@DeleteMapping("bids/delete/{bidId}")
	public void destroyBid(HttpServletResponse res, HttpServletRequest req, @PathVariable int bidId) {
		if (txSvc.destroyBid(bidId)) {
			res.setStatus(204);
		} else {
			res.setStatus(401);
		}
	}

}
