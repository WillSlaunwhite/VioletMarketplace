package com.skilldistillery.marketplace.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.skilldistillery.marketplace.converters.RarityConverter;
import com.skilldistillery.marketplace.converters.StatusConverter;
import com.skilldistillery.marketplace.enums.Rarity;
import com.skilldistillery.marketplace.enums.Status;
import com.skilldistillery.marketplace.interfaces.Searchable;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;
import java.util.Objects;

@Entity
public class Token implements Searchable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;
    private String description;
    private int price;
    @Convert(converter = StatusConverter.class)
    private Status status;
    @Convert(converter = RarityConverter.class)
    private Rarity rarity;
    @CreationTimestamp
    @Column(name = "release_date")
    private LocalDate releaseDate;

    @UpdateTimestamp
    @Column(name = "updated_on")
    private LocalDate updatedOn;

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

    public Token(int id, String name, String description, int price, Status status, Rarity rarity, LocalDate releaseDate, LocalDate updatedOn, String tokenLocation, Collection collection, List<TokenTx> transfers, User creator, User owner) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.status = status;
        this.rarity = rarity;
        this.releaseDate = releaseDate;
        this.updatedOn = updatedOn;
        this.tokenLocation = tokenLocation;
        this.collection = collection;
        this.transfers = transfers;
        this.creator = creator;
        this.owner = owner;
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

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public Status getStatus() { return status; }

    public void setStatus(Status status) { this.status = status; }

    public Rarity getRarity() { return rarity; }

    public void setRarity(Rarity rarity) { this.rarity = rarity; }

    public LocalDate getReleaseDate() { return releaseDate; }

    public void setReleaseDate(LocalDate releaseDate) {
        this.releaseDate = releaseDate;
    }

    public LocalDate getUpdatedOn() { return updatedOn; }

    public void setUpdatedOn(LocalDate updatedOn) { this.updatedOn = updatedOn; }

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
        return id == token.id && price == token.price && Objects.equals(name, token.name) && Objects.equals(description, token.description) && status == token.status && rarity == token.rarity && Objects.equals(releaseDate, token.releaseDate) && Objects.equals(updatedOn, token.updatedOn) && Objects.equals(tokenLocation, token.tokenLocation) && Objects.equals(collection, token.collection) && Objects.equals(transfers, token.transfers) && Objects.equals(creator, token.creator) && Objects.equals(owner, token.owner);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, description, price, status, rarity, releaseDate, updatedOn, tokenLocation, collection, transfers, creator, owner);
    }

    @Override
    public String toString() {
        return "Token{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", price=" + price +
                ", status=" + status +
                ", rarity=" + rarity +
                ", releaseDate=" + releaseDate +
                ", updatedOn=" + updatedOn +
                ", tokenLocation='" + tokenLocation + '\'' +
                '}';
    }
}
