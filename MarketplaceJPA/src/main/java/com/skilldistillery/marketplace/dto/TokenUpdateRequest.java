package com.skilldistillery.marketplace.dto;

import com.skilldistillery.marketplace.entities.Collection;
import com.skilldistillery.marketplace.enums.Rarity;
import com.skilldistillery.marketplace.enums.Status;

import java.util.Objects;

public class TokenUpdateRequest {
    private int tokenId;
    private String name;
    private String description;
    private Status status;
    private int price;
    private Rarity rarity;
    private String tokenLocation;
    private Collection collection;

    public TokenUpdateRequest() {}

    public TokenUpdateRequest(int tokenId, String name, String description, Status status, int price, Rarity rarity, String tokenLocation, Collection collection) {
        this.tokenId = tokenId;
        this.name = name;
        this.description = description;
        this.price = price;
        this.rarity = rarity;
        this.tokenLocation = tokenLocation;
        this.collection = collection;
    }

    public int getTokenId() {
        return tokenId;
    }

    public void setTokenId(int tokenId) {
        this.tokenId = tokenId;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
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

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public Rarity getRarity() {
        return rarity;
    }

    public void setRarity(Rarity rarity) {
        this.rarity = rarity;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        TokenUpdateRequest that = (TokenUpdateRequest) o;
        return tokenId == that.tokenId && price == that.price && Objects.equals(name, that.name) && Objects.equals(description, that.description) && status == that.status && rarity == that.rarity && Objects.equals(tokenLocation, that.tokenLocation) && Objects.equals(collection, that.collection);
    }

    @Override
    public int hashCode() {
        return Objects.hash(tokenId, name, description, status, price, rarity, tokenLocation, collection);
    }

    @Override
    public String toString() {
        return "TokenUpdateRequest{" +
                "tokenId=" + tokenId +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", status=" + status +
                ", price=" + price +
                ", rarity=" + rarity +
                ", tokenLocation='" + tokenLocation + '\'' +
                ", collection=" + collection +
                '}';
    }
}
