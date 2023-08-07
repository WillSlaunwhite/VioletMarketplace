package com.skilldistillery.marketplace.entities

import com.fasterxml.jackson.annotation.JsonBackReference
import com.fasterxml.jackson.annotation.JsonIgnore
import com.skilldistillery.marketplace.converters.AccountStatusConverter
import com.skilldistillery.marketplace.enums.AccountStatus
import com.skilldistillery.marketplace.interfaces.Searchable
import org.hibernate.annotations.CreationTimestamp
import org.hibernate.annotations.UpdateTimestamp
import org.hibernate.proxy.HibernateProxy
import java.time.LocalDateTime
import java.util.*
import javax.persistence.*

@Entity
data class User  (
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Int = 0,
    var username: String? = null,
    var password: String? = null,

    @Convert(converter = AccountStatusConverter::class)
    @Column(name = "account_status")
    var accountStatus: AccountStatus? = null,
    var role: String? = null,
    var email: String? = null,
    var biography: String? = null,

    @OneToMany(cascade = [CascadeType.ALL], orphanRemoval = true)
    @JoinColumn(name = "user_id")
    val balances: List<UserCurrencyBalance>  = emptyList(),

    @CreationTimestamp
    @Column(name = "created_on")
    var createdOn: LocalDateTime? = null,

    @UpdateTimestamp
    @Column(name = "updated_on")
    var updatedOn: LocalDateTime? = null,

    @get: JvmName("getDisplayNameProperty")
    @Column(name = "display_name")
    var displayName: String? = null,

    @Column(name = "picture_url")
    var pictureUrl: String? = null,

    @JsonIgnore
    @OneToMany(mappedBy = "user")
    var carts: List<Cart>? = null,

    @JsonBackReference(value = "sender")
    @OneToMany(mappedBy = "sender")
    var sentMessages: List<Message>? = null,

    @JsonBackReference(value = "recipient")
    @OneToMany(mappedBy = "recipient")
    var receivedMessages: List<Message>? = null,

    @JsonIgnore
    @OneToMany(mappedBy = "creator")
    var createdTokens: List<Token>? = null,

    @JsonIgnore
    @OneToMany(mappedBy = "owner")
    var ownedTokens: List<Token>? = null,

    @JsonIgnore
    @OneToMany(mappedBy = "creator")
    var collectionsCreated: List<Collection>? = null,

    @JsonIgnore
    @OneToMany(mappedBy = "seller")
    var sales: List<TokenTx>? = null,

    @JsonIgnore
    @OneToMany(mappedBy = "buyer")
    var purchases: List<TokenTx>? = null
) : Searchable {
    override fun getDisplayName() : String? {
        return this.displayName ?: this.username
    }
    override fun getDescription() : String? {
        return this.biography;
    }
    override fun getType() : String {
        return "user";
    }

    final override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || other !is User) return false

        return username == other.username
    }

    final override fun hashCode(): Int = username?.hashCode() ?: 0
    @Override
    override fun toString(): String {
        return this::class.simpleName + "(id = $id , username = $username , password = $password , accountStatus = $accountStatus , role = $role , email = $email , biography = $biography , createdOn = $createdOn , updatedOn = $updatedOn , displayName = $displayName , pictureUrl = $pictureUrl )"
    }
}
