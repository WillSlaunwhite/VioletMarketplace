package com.skilldistillery.marketplace.entities

import org.hibernate.annotations.CreationTimestamp
import java.math.BigDecimal
import java.time.LocalDateTime
import javax.persistence.*

@Entity
data class Bid (
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Int = 0,
    @ManyToOne @JoinColumn(name = "token_id")
    var token: Token? = null,
    var description: String? = null,
    @OneToOne @JoinColumn(name = "seller_id")
    var seller: User? = null,
    @OneToOne @JoinColumn(name = "buyer_id")
    var buyer: User? = null,
    @Column(name = "bid_date") @CreationTimestamp
    var bidDate: LocalDateTime? = null,
    @Column(name = "offer_amount", precision = 20, scale = 8)
    var offerAmount: BigDecimal,
    @ManyToOne(fetch = FetchType.LAZY)
    val auction: Auction? = null
    ) {
    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (javaClass != other?.javaClass) return false

        other as Bid

        return id == other.id
    }

    override fun hashCode(): Int {
        return id
    }

    override fun toString(): String {
        return "Bid(id=$id, token=$token, description=$description, seller=$seller, buyer=$buyer, bidDate=$bidDate, offerAmount=$offerAmount)"
    }
}
