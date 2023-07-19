package com.skilldistillery.marketplace.entities;

import java.time.LocalDate;
import java.util.List;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.skilldistillery.marketplace.interfaces.Searchable;
import org.hibernate.annotations.CreationTimestamp;

@Entity
public class Token implements Searchable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;
    private String description;
    private String rarity;
    private int price;
    private boolean offered;

    @CreationTimestamp
    @Column(name = "release_date")
    private LocalDate releaseDate;



    @Column(name = "token_location")
    private String tokenLocation;

    @ManyToOne
    @JoinColumn(name = "collection_id")
    private Collection collection;

    @JsonIgnore  // added this and had to fix tx getters and setters for me
    @OneToMany(mappedBy = "token")
    private List<TokenTx> transfers;

    @ManyToOne
    @JoinColumn(name = "creator_id")
    private User creator;

    @ManyToOne
    @JoinColumn(name = "owner_id")
    private User owner;


    // update constructors and getters and setters once mappings are added

    public Token() {
        super();
    }

    public Token(int id, String name, String description, String rarity, int price, boolean offered, LocalDate releaseDate, String tokenLocation) {
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

    @Override
    public String getType() {
        return "Token";
    }

    @Override
    public String getDisplayName() {
        return "";
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

    public void setTokenLocation(String tokenLocation) { this.tokenLocation = tokenLocation; }



    public Collection getCollection() {
        return collection;
    }

    public void setCollection(Collection collection) {
        this.collection = collection;
    }

    public List<TokenTx> getTransfers() {
        return transfers;
    }

    public void setTransfers(List<TokenTx> transfers) {
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
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Token token = (Token) o;
        return id == token.id && price == token.price && offered == token.offered && Objects.equals(name, token.name) && Objects.equals(description, token.description) && Objects.equals(rarity, token.rarity) && Objects.equals(releaseDate, token.releaseDate) && Objects.equals(tokenLocation, token.tokenLocation) && Objects.equals(collection, token.collection) && Objects.equals(transfers, token.transfers) && Objects.equals(creator, token.creator) && Objects.equals(owner, token.owner);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, description, rarity, price, offered, releaseDate, tokenLocation, collection, transfers, creator, owner);
    }

    @Override
    public String toString() {
        return "Token [id=" + id + ", name=" + name + ", description=" + description + ", rarity=" + rarity + ", price=" + price + ", offered=" + offered + ", releaseDate=" + releaseDate + ", tokenLocation=" + tokenLocation + ", collection=" + collection + ", transfers=" + transfers + ", creator=" + creator + ", owner=" + owner + "]";
    }

}
