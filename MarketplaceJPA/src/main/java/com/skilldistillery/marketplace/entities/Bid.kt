package com.skilldistillery.marketplace.entities

import org.hibernate.annotations.CreationTimestamp
import java.time.LocalDateTime
import javax.persistence.*

@Entity
class Bid {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id = 0

    @ManyToOne
    @JoinColumn(name = "token_id")
    var token: Token? = null
    var description: String? = null

    @OneToOne
    @JoinColumn(name = "seller_id")
    var seller: User? = null

    @OneToOne
    @JoinColumn(name = "buyer_id")
    var buyer: User? = null

    @Column(name = "bid_date")
    @CreationTimestamp
    var bidDate: LocalDateTime? = null

    @Column(name = "offer_amount")
    var offerAmount = 0.0

    constructor() : super()
    constructor(
        id: Int,
        token: Token?,
        description: String?,
        transferDate: LocalDateTime?,
        buyer: User?,
        seller: User?
    ) {
        this.token = token
        this.description = description
        bidDate = transferDate
        this.seller = seller
        this.buyer = buyer
    }

    fun getBidDate(bidDate: LocalDateTime?) {
        this.bidDate = bidDate
    }

    override fun toString(): String {
        return ("Bid [id=" + id + ", token=" + token + ", description=" + description + ", seller=" + seller + ", buyer="
                + buyer + ", bidDate=" + bidDate + ", offerAmount=" + offerAmount + "]")
    }
}
