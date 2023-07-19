package com.skilldistillery.marketplace.requests;

import com.skilldistillery.marketplace.entities.Collection;

import java.util.Objects;

public class TokenUpdateRequest {
    private int tokenId;
    private String name;
    private String description;
    private boolean offered;
    private double price;
    private String rarity;
    private String tokenLocation;
    private Collection collection;

    public TokenUpdateRequest() {}

    public TokenUpdateRequest(int tokenId, String name, String description, boolean offered, double price, String rarity, String tokenLocation, Collection collection) {
        this.tokenId = tokenId;
        this.name = name;
        this.description = description;
        this.offered = offered;
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

    public void setPrice(double price) {
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

    public boolean isOffered() {
        return offered;
    }

    public void setOffered(boolean offered) {
        this.offered = offered;
    }

    public String getRarity() {
        return rarity;
    }

    public void setRarity(String rarity) {
        this.rarity = rarity;
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        TokenUpdateRequest that = (TokenUpdateRequest) o;
        return offered == that.offered && Double.compare(that.price, price) == 0 && Objects.equals(name, that.name) && Objects.equals(description, that.description) && Objects.equals(rarity, that.rarity) && Objects.equals(tokenLocation, that.tokenLocation) && Objects.equals(collection, that.collection);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, description, offered, price, rarity, tokenLocation, collection);
    }

    @Override
    public String toString() {
        return "TokenUpdateRequest{" +
                "name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", offered=" + offered +
                ", price=" + price +
                ", rarity='" + rarity + '\'' +
                ", tokenLocation='" + tokenLocation + '\'' +
                ", collection=" + collection +
                '}';
    }
}
