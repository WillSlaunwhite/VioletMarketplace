package com.skilldistillery.marketplace.entities

import org.hibernate.proxy.HibernateProxy
import java.time.LocalDateTime
import javax.persistence.*

@Entity
@Table(name = "auction")
data class Auction(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Int,

    @Column(name = "token_id", nullable = false)
    val tokenId: Int,

    @Column(name = "start_price", nullable = false)
    val startPrice: Int,

    @Column(name = "current_highest_bid", nullable = false)
    val currentHighestBid: Int,

    @Column(name = "ceiling_price")
    val ceilingPrice: Int?,

    @Column(name = "start_time", nullable = false)
    val startTime: LocalDateTime,

    @Column(name = "end_time", nullable = false)
    val endTime: LocalDateTime,

    @Enumerated(EnumType.STRING)
    @Column(name = "status", nullable = false)
    val status: AuctionStatus,

    @OneToMany @JoinColumn(name = "seller_id", nullable = false)
    val seller: User,

    @OneToMany @JoinColumn(name = "token_id", nullable = false)
    val token: Token
) {
    enum class AuctionStatus {
        ACTIVE,
        PENDING,
        CLOSED,
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (javaClass != other?.javaClass) return false

        other as Auction

        return id == other.id
    }

    override fun hashCode(): Int {
        return id
    }

    override fun toString(): String {
        return "Auction(id=$id, tokenId=$tokenId, startPrice=$startPrice, currentHighestBid=$currentHighestBid, ceilingPrice=$ceilingPrice, startTime=$startTime, endTime=$endTime, status=$status, seller=$seller, token=$token)"
    }
}
