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
import javax.persistence.Table;

@Entity
@Table(name="market_transfer")
public class TokenTx {
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
	
	@Column(name="transfer_date")
	private LocalDateTime transferDate;
	
	public TokenTx() { super(); }

	public TokenTx(int id, Token token, String description, LocalDateTime transferDate, User buyer, User seller) {
		
		this.token = token;
		this.description = description;
		this.transferDate = transferDate;
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

	public LocalDateTime getTransferDate() {
		return transferDate;
	}

	public void setTransferDate(LocalDateTime transferDate) {
		this.transferDate = transferDate;
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("MarketTransfer [id=").append(id).append(", token=").append(token).append(", description=")
				.append(description).append(", transferDate=").append(transferDate).append("]");
		return builder.toString();
	}
	
	
}
