package com.skilldistillery.marketplace.requests;

import java.util.Objects;

public class TokenUpdateRequest {
    private String action; // buy or sell
    private double price;
    private String recipient;

    public TokenUpdateRequest() {}

    public TokenUpdateRequest(String action, double price, String recipient) {
        this.action = action;
        this.price = price;
        this.recipient = recipient;
    }

    public String getAction() {
        return action;
    }

    public void setAction(String action) {
        this.action = action;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getRecipient() {
        return recipient;
    }

    public void setRecipient(String recipient) {
        this.recipient = recipient;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        TokenUpdateRequest that = (TokenUpdateRequest) o;
        return Double.compare(that.price, price) == 0 && Objects.equals(action, that.action) && Objects.equals(recipient, that.recipient);
    }

    @Override
    public int hashCode() {
        return Objects.hash(action, price, recipient);
    }
}
