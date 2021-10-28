package com.skilldistillery.marketplace.entities;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class Token {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	private String name;
	private String description;
	private String rarity;
	private int price;
	private boolean offered;
	
	@Column(name="release_date")
	private LocalDate releaseDate;
	
	@Column(name="token_location")
	private String tokenLocation;
	
	@ManyToOne
	@JoinColumn(name="collection_id")
	private Collection collection;
	
	@OneToMany(mappedBy="token")
	private List<MarketTransfer> transfers;
	
	
	@ManyToOne
	@JoinColumn(name="creator_id")
	private User creator;
	
	@ManyToOne
	@JoinColumn(name="owner_id")
	private User owner;
	
//	private Collection collection;
	
	
	// update constructors and getters and setters once mappings are added
	
	public Token() { super(); }
	
	public Token(int id, String name, String description, String rarity, int price, boolean offered,
			LocalDate releaseDate, String tokenLocation) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.rarity = rarity;
		this.price = price;
		this.offered = offered;
		this.releaseDate = releaseDate;
		this.tokenLocation = tokenLocation;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getRarity() {
		return rarity;
	}

	public void setRarity(String rarity) {
		this.rarity = rarity;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public boolean isOffered() {
		return offered;
	}

	public void setOffered(boolean offered) {
		this.offered = offered;
	}

	public LocalDate getReleaseDate() {
		return releaseDate;
	}

	public void setReleaseDate(LocalDate releaseDate) {
		this.releaseDate = releaseDate;
	}

	public String getTokenLocation() {
		return tokenLocation;
	}

	public void setTokenLocation(String tokenLocation) {
		this.tokenLocation = tokenLocation;
	}
	
	public Collection getCollection() {
		return collection;
	}

	public void setCollection(Collection collection) {
		this.collection = collection;
	}

	public List<MarketTransfer> getTransfers() {
		return transfers;
	}

	public void setTransfers(List<MarketTransfer> transfers) {
		this.transfers = transfers;
	}

	public User getCreator() {
		return creator;
	}

	public void setCreator(User creator) {
		this.creator = creator;
	}

	public User getOwner() {
		return owner;
	}

	public void setOwner(User owner) {
		this.owner = owner;
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("Token [id=").append(id).append(", name=").append(name).append(", description=")
				.append(description).append(", rarity=").append(rarity).append(", price=").append(price)
				.append(", offered=").append(offered).append(", releaseDate=").append(releaseDate)
				.append(", tokenLocation=").append(tokenLocation).append("]");
		return builder.toString();
	}
	
	
	
}
