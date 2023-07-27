package com.skilldistillery.marketplace.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.skilldistillery.marketplace.converters.AccountStatusConverter;
import com.skilldistillery.marketplace.enums.AccountStatus;
import com.skilldistillery.marketplace.interfaces.Searchable;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;

@Entity
public class User implements Searchable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String username;
    private String password;
    @Convert(converter = AccountStatusConverter.class)
    @Column(name = "account_status")
    private AccountStatus accountStatus;
    private String role;
    private String email;
    private String biography;

    @CreationTimestamp
    @Column(name = "created_on")
    private LocalDateTime createdOn;

    @UpdateTimestamp
    @Column(name = "updated_on")
    private LocalDateTime updatedOn;

    @Column(name = "display_name")
    private String displayName;

    @Column(name = "picture_url")
    private String pictureUrl;


    // added a bunch of json ignore
    @JsonIgnore
    @OneToMany(mappedBy = "user")
    private List<Cart> carts;

    @JsonBackReference(value = "sender")
    @OneToMany(mappedBy = "sender")
    private List<Message> sentMessages;

    @JsonBackReference(value = "recipient")
    @OneToMany(mappedBy = "recipient")
    private List<Message> receivedMessages;

    @JsonIgnore
    @OneToMany(mappedBy = "creator")
    private List<Token> createdTokens;

    @JsonIgnore
    @OneToMany(mappedBy = "owner")
    private List<Token> ownedTokens;

    @JsonIgnore
    @OneToMany(mappedBy = "creator")
    private List<Collection> collectionsCreated;

    @JsonIgnore
    @OneToMany(mappedBy = "seller")
    private List<TokenTx> sellerTransfers;

    @JsonIgnore
    @OneToMany(mappedBy = "buyer")
    private List<TokenTx> buyerTransfers;

    public User() {
        super();
    }

    @Override
    public String getDescription() {
        return "";
    }

    @Override
    public String getType() {
        return "User";
    }

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

    public AccountStatus getAccountStatus() {
        return accountStatus;
    }

    public void setAccountStatus(AccountStatus accountStatus) {
        this.accountStatus = accountStatus;
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

    public LocalDateTime getUpdatedOn() {
        return updatedOn;
    }

    public void setUpdatedOn(LocalDateTime updatedOn) {
        this.updatedOn = updatedOn;
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
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return id == user.id && Objects.equals(username, user.username) && Objects.equals(displayName, user.displayName);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, username, displayName);
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", accountStatus=" + accountStatus +
                ", role='" + role + '\'' +
                ", email='" + email + '\'' +
                ", biography='" + biography + '\'' +
                ", createdOn=" + createdOn +
                ", updatedOn=" + updatedOn +
                ", displayName='" + displayName + '\'' +
                ", pictureUrl='" + pictureUrl + '\'' +
                '}';
    }
}
