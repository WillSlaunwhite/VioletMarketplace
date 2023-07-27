 package com.skilldistillery.marketplace.entities;

 import org.hibernate.annotations.CreationTimestamp;

 import javax.persistence.*;
 import java.time.LocalDateTime;

@Entity
public class Bid {
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
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
	
	@Column(name="offer_amount")
	private double offerAmount;
	
	public double getOfferAmount() {
		return offerAmount;
	}

	public void setOfferAmount(double offerAmount) {
		this.offerAmount = offerAmount;
	}

	public void setBidDate(LocalDateTime bidDate) {
		this.bidDate = bidDate;
	}

	
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
		return "Bid [id=" + id + ", token=" + token + ", description=" + description + ", seller=" + seller + ", buyer="
				+ buyer + ", bidDate=" + bidDate + ", offerAmount=" + offerAmount + "]";
	}
	
	
}
