package com.skilldistillery.marketplace.entities

import org.hibernate.annotations.CreationTimestamp
import java.time.LocalDateTime
import javax.persistence.*

@Entity
@Table(name = "block")
data class Block (
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Int,

    @Column(name = "hash", nullable = false)
    val hashCode: String,

    @Column(name = "prev_hash", nullable = true)
    val prevHashCode: String,

    @OneToMany(mappedBy = "block", cascade = [CascadeType.ALL])
    val transactions: Set<Transaction> = emptySet(),

    @ManyToOne
    @JoinColumn(name = "user_id")
    val user: User? = null,

    @Column(name = "transaction_count")
    val transactionCount: Int? = 0,

    val status: String? = "",

    @CreationTimestamp
    val timestamp: LocalDateTime = LocalDateTime.now(),
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