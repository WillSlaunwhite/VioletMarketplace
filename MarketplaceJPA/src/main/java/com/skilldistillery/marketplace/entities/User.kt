package com.skilldistillery.marketplace.entities

import com.fasterxml.jackson.annotation.JsonBackReference
import com.fasterxml.jackson.annotation.JsonIgnore
import com.skilldistillery.marketplace.converters.AccountStatusConverter
import com.skilldistillery.marketplace.dtos.CommonUserDTO
import com.skilldistillery.marketplace.enums.AccountStatus
import com.skilldistillery.marketplace.interfaces.Searchable
import org.hibernate.annotations.CreationTimestamp
import org.hibernate.annotations.UpdateTimestamp
import org.hibernate.proxy.HibernateProxy
import java.time.LocalDateTime
import java.util.*
import java.util.Collections.emptyList
import javax.persistence.*
import kotlin.jvm.Transient

@Entity
data class User  (
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
    val balances: Set<UserCurrencyBalance>  = emptySet(),

    @CreationTimestamp @Column(name = "created_on")
    var createdOn: LocalDateTime? = null,
    @UpdateTimestamp @Column(name = "updated_on")
    var updatedOn: LocalDateTime? = null,

    @get: JvmName(name = "getDisplayNameProperty")
    @Column(name = "display_name")
    override val displayName: String,

    @Column(name = "picture_url")
    var pictureUrl: String? = null,
    @JsonIgnore @OneToMany(mappedBy = "user")
    var carts: List<Cart>? = null,
    @JsonBackReference(value = "sender")
    @OneToMany(mappedBy = "sender")
    var sentMessages: List<Message>? = null,
    @JsonBackReference(value = "recipient")
    @OneToMany(mappedBy = "recipient")
    var receivedMessages: List<Message>? = null,
    @JsonIgnore @OneToMany(mappedBy = "creator")
    var createdTokens: Set<Token>? = null,
    @JsonIgnore @OneToMany(mappedBy = "owner")
    var ownedTokens: Set<Token>? = null,
    @JsonIgnore @OneToMany(mappedBy = "creator")
    var collectionsCreated: Set<Collection>? = null,
    @JsonIgnore @OneToMany(mappedBy = "seller")
    var sales: List<TokenTx>? = null,
    @JsonIgnore @OneToMany(mappedBy = "buyer")
    var purchases: List<TokenTx>? = null,

) : Searchable {
    @Transient
    override val description: String = biography ?: ""
    @Transient
    override val type: String = "User"


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
