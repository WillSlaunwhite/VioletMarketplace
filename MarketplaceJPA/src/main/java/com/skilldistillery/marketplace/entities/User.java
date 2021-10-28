package com.skilldistillery.marketplace.entities;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String username;
	private String password;
	private boolean enabled;
	private String role;
	private String email;
	private String biography;
	
	@Column(name="created_on")
	private LocalDateTime createdOn;
	
	@Column(name="display_name")
	private String displayName;
	
	@Column(name="picture_url")
	private String pictureUrl;
	
	@JsonIgnore
	@OneToMany(mappedBy="user")
	private List<Cart> carts;
	
	@OneToMany(mappedBy="sender")
	private List<Message> sentMessages;
	
	@OneToMany(mappedBy="recipient")
	private List<Message> receivedMessages;
	
	
	@OneToMany(mappedBy="creator")
	private List<Token> createdTokens;
	
	public List<Cart> getCarts() {
		return carts;
	}



	public void setCarts(List<Cart> carts) {
		this.carts = carts;
	}



	public List<Message> getSentMessages() {
		return sentMessages;
	}



	public void setSentMessages(List<Message> sentMessages) {
		this.sentMessages = sentMessages;
	}



	public List<Message> getReceivedMessages() {
		return receivedMessages;
	}



	public void setReceivedMessages(List<Message> receivedMessages) {
		this.receivedMessages = receivedMessages;
	}



	public List<Token> getCreatedTokens() {
		return createdTokens;
	}



	public void setCreatedTokens(List<Token> createdTokens) {
		this.createdTokens = createdTokens;
	}



	public List<Token> getOwnedTokens() {
		return ownedTokens;
	}



	public void setOwnedTokens(List<Token> ownedTokens) {
		this.ownedTokens = ownedTokens;
	}



	public List<Collection> getCollectionsCreated() {
		return collectionsCreated;
	}



	public void setCollectionsCreated(List<Collection> collectionsCreated) {
		this.collectionsCreated = collectionsCreated;
	}



	public List<TokenTx> getSellerTransfers() {
		return sellerTransfers;
	}



	public void setSellerTransfers(List<TokenTx> sellerTransfers) {
		this.sellerTransfers = sellerTransfers;
	}



	public List<TokenTx> getBuyerTransfers() {
		return buyerTransfers;
	}



	public void setBuyerTransfers(List<TokenTx> buyerTransfers) {
		this.buyerTransfers = buyerTransfers;
	}

	@OneToMany(mappedBy="owner")
	private List<Token> ownedTokens;
	
	@OneToMany(mappedBy="creator")
	private List<Collection> collectionsCreated;
	
	@OneToMany(mappedBy="seller")
	private List<TokenTx> sellerTransfers;
	
	@OneToMany(mappedBy="buyer")
	private List<TokenTx> buyerTransfers;
	
	public User() { super(); }
	
	

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public boolean isEnabled() {
		return enabled;
	}

	public void setEnabled(boolean enabled) {
		this.enabled = enabled;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getEmail() {
		return email;
	}



	public void setEmail(String email) {
		this.email = email;
	}



	public String getBiography() {
		return biography;
	}



	public void setBiography(String biography) {
		this.biography = biography;
	}



	public LocalDateTime getCreatedOn() {
		return createdOn;
	}



	public void setCreatedOn(LocalDateTime createdOn) {
		this.createdOn = createdOn;
	}



	public String getDisplayName() {
		return displayName;
	}



	public void setDisplayName(String displayName) {
		this.displayName = displayName;
	}



	public String getPictureUrl() {
		return pictureUrl;
	}



	public void setPictureUrl(String pictureUrl) {
		this.pictureUrl = pictureUrl;
	}



	@Override
	public String toString() {
		return "User [id=" + id + ", username=" + username + ", enabled=" + enabled + ", role=" + role + ", createdOn="
				+ createdOn + "]";
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		User other = (User) obj;
		return id == other.id;
	}
}
