 package com.skilldistillery.marketplace.entities;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import org.hibernate.annotations.CreationTimestamp;

@Entity
public class Bid {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;

	@ManyToOne
	@JoinColumn(name="token_id")
	private Token token;
	
	private String description;
	
	@OneToOne
	@JoinColumn(name="seller_id")
	private User seller;
	
	@OneToOne
	@JoinColumn(name="buyer_id")
	private User buyer;
	
	@Column(name="bid_date")
	@CreationTimestamp
	private LocalDateTime bidDate;
	
	public User getSeller() {
		return seller;
	}

	public void setSeller(User seller) {
		this.seller = seller;
	}

	public User getBuyer() {
		return buyer;
	}

	public void setBuyer(User buyer) {
		this.buyer = buyer;
	}

	
	public Bid() { super(); }

	public Bid(int id, Token token, String description, LocalDateTime transferDate, User buyer, User seller) {
		
		this.token = token;
		this.description = description;
		this.bidDate = transferDate;
		this.seller=seller;
		this.buyer=buyer;
		
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Token getToken() {
		return token;
	}

	public void setToken(Token token) {
		this.token = token;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public LocalDateTime getBidDate() {
		return bidDate;
	}

	public void getBidDate(LocalDateTime bidDate) {
		this.bidDate = bidDate;
	}

	@Override
	public String toString() {
		return "TokenTx [id=" + id + ", token=" + token + ", description=" + description + ", seller=" + seller
				+ ", buyer=" + buyer + ", transferDate=" + bidDate + "]";
	}
	
	
}
