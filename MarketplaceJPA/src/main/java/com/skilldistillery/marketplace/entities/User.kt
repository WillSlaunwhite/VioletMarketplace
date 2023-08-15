package com.skilldistillery.marketplace.entities

import com.fasterxml.jackson.annotation.JsonBackReference
import com.fasterxml.jackson.annotation.JsonIgnore
import com.skilldistillery.marketplace.converters.AccountStatusConverter
import com.skilldistillery.marketplace.enums.AccountStatus
import com.skilldistillery.marketplace.interfaces.Searchable
import org.hibernate.annotations.CreationTimestamp
import org.hibernate.annotations.UpdateTimestamp
import java.time.LocalDateTime
import javax.persistence.*
import kotlin.jvm.Transient

@Entity
data class User(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Int = 0,
    var username: String,
    var password: String,
    @Convert(converter = AccountStatusConverter::class)
    @Column(name = "account_status")
    var accountStatus: AccountStatus,
    var role: String,
    var email: String,
    var biography: String? = null,

    @OneToMany(cascade = [CascadeType.ALL], orphanRemoval = true, fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    val balances: Set<UserCurrencyBalance> = mutableSetOf(),

    @CreationTimestamp @Column(name = "created_on")
    var createdOn: LocalDateTime,
    @UpdateTimestamp @Column(name = "updated_on")
    var updatedOn: LocalDateTime,

    @get: JvmName(name = "getDisplayNameProperty")
    @Column(name = "display_name")
    override val displayName: String,

    @Column(name = "picture_url")
    var pictureUrl: String? = null,
    @JsonIgnore @OneToMany(mappedBy = "user")
    var carts: Set<Cart> = mutableSetOf(),
    @JsonBackReference(value = "sender")
    @OneToMany(mappedBy = "sender")
    var sentMessages: Set<Message> = mutableSetOf(),
    @JsonBackReference(value = "recipient")
    @OneToMany(mappedBy = "recipient")
    var receivedMessages: Set<Message> = mutableSetOf(),
    @JsonIgnore @OneToMany(mappedBy = "creator")
    var createdTokens: Set<Token> = mutableSetOf(),
    @JsonIgnore @OneToMany(mappedBy = "owner")
    var ownedTokens: Set<Token> = mutableSetOf(),
    @JsonIgnore @OneToMany(mappedBy = "creator")
    var collectionsCreated: Set<Collection> = mutableSetOf(),
    @JsonIgnore @OneToMany(mappedBy = "seller")
    var sales: Set<Transaction> = mutableSetOf(),
    @JsonIgnore @OneToMany(mappedBy = "buyer")
    var purchases: Set<Transaction> = mutableSetOf(),
    @JsonIgnore @OneToMany(mappedBy = "seller")
    var auctions: Set<Transaction> = mutableSetOf(),

    ) : Searchable {
    @Transient
    override val description: String = biography ?: ""

    @Transient
    override val type: String = "User"


    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || other !is User) return false

        return username == other.username
    }

    override fun hashCode(): Int = username.hashCode()
    override fun toString(): String {
        return this::class.simpleName + "(id = $id , username = $username , password = $password , accountStatus = $accountStatus , role = $role , email = $email , biography = $biography , createdOn = $createdOn , updatedOn = $updatedOn , displayName = $displayName , pictureUrl = $pictureUrl )"
    }
}
