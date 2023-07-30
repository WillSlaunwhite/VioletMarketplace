package com.skilldistillery.marketplace.entities

import java.time.LocalDateTime
import javax.persistence.*

@Entity
@Table(name = "block")
data class Block(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Int,

    @Column(name = "hash_code", nullable = false)
    val hashCode: String,

    @Column(name = "previous_hash_code", nullable = false)
    val prevHashCode: String,

    @OneToMany(mappedBy = "block", cascade = [CascadeType.ALL])
    val transactions: List<TokenTx> = emptyList(),

    @ManyToOne
    @JoinColumn(name = "user_id")
    val user: User?,


    @Column(name = "transaction_count")
    val transactionCount: Int?,

    val status: String?,

    val timestamp: LocalDateTime,
) {
    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (javaClass != other?.javaClass) return false

        other as Block

        if (id != other.id) return false
        if (hashCode != other.hashCode) return false
        if (prevHashCode != other.prevHashCode) return false
        return transactions == other.transactions
    }

    override fun hashCode(): Int {
        var result = id
        result = 31 * result + hashCode.hashCode()
        result = 31 * result + prevHashCode.hashCode()
        result = 31 * result + transactions.hashCode()
        return result
    }

    override fun toString(): String {
        return "Block(id=$id, hashCode='$hashCode', prevHashCode='$prevHashCode', transactions=$transactions)"
    }

}