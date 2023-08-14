package com.skilldistillery.marketplace.entities

import java.time.LocalDateTime
import javax.persistence.*

@Entity
@Table(name = "market_transfer")
data class Transaction (
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Int,
    val timestamp: LocalDateTime,
    val description: String?,
    val type: String?,
    @ManyToOne(fetch = FetchType.LAZY) @JoinColumn(name = "token_id")
    val token: Token,

    @ManyToOne(fetch = FetchType.LAZY) @JoinColumn(name = "seller_id")
    val seller: User,

    @ManyToOne(fetch = FetchType.LAZY) @JoinColumn(name = "buyer_id")
    val buyer: User,

    @ManyToOne(fetch = FetchType.LAZY) @JoinColumn(name = "block_id")
    val block: Block,

    @OneToOne(fetch = FetchType.LAZY)
    val auction: Auction?

) {
    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (javaClass != other?.javaClass) return false

        other as Transaction

        if (id != other.id) return false
        if (timestamp != other.timestamp) return false
        if (description != other.description) return false
        if (token != other.token) return false
        if (seller != other.seller) return false
        if (buyer != other.buyer) return false
        return block == other.block
    }

    override fun hashCode(): Int {
        var result = id
        result = 31 * result + timestamp.hashCode()
        result = 31 * result + (description?.hashCode() ?: 0)
        result = 31 * result + token.hashCode()
        result = 31 * result + seller.hashCode()
        result = 31 * result + buyer.hashCode()
        result = 31 * result + block.hashCode()
        return result
    }

    override fun toString(): String {
        return "TokenTx(id=$id, transferDate=$timestamp, description=$description, token=$token, seller=$seller, buyer=$buyer, block=$block)"
    }
}
