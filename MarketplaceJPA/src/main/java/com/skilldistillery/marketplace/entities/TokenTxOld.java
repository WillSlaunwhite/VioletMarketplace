package com.skilldistillery.marketplace.entities;

import java.time.LocalDateTime;



import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;

@Entity
@Table(name = "market_transfer")
public class TokenTxOld {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "description")
    private String description;

    @Column(name = "transfer_date")
    @CreationTimestamp
    private LocalDateTime transferDate;

    @OneToOne
    @JoinColumn(name = "seller_id")
    private User seller;

    @OneToOne
    @JoinColumn(name = "buyer_id")
    private User buyer;

    @ManyToOne
    @JoinColumn(name = "token_id")
    private Token token;

    public TokenTxOld() {
        super();
    }

    public TokenTxOld(int id, Token token, String description, LocalDateTime transferDate, User buyer, User seller) {
        this.token = token;
        this.description = description;
        this.transferDate = transferDate;
        this.seller = seller;
        this.buyer = buyer;

    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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
        return "TokenTx [id=" + id  + ", description=" + description + ", seller=" + seller
                + ", buyer=" + buyer + ", transferDate=" + transferDate + "]";
    }
}
