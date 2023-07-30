package com.skilldistillery.marketplace.entities

import com.fasterxml.jackson.annotation.JsonBackReference
import com.fasterxml.jackson.annotation.JsonIgnore
import com.skilldistillery.marketplace.converters.AccountStatusConverter
import com.skilldistillery.marketplace.enums.AccountStatus
import com.skilldistillery.marketplace.interfaces.Searchable
import org.hibernate.annotations.CreationTimestamp
import org.hibernate.annotations.UpdateTimestamp
import java.time.LocalDateTime
import java.util.*
import javax.persistence.*

@Entity
class User : Searchable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id = 0
    var username: String? = null
    var password: String? = null

    @Convert(converter = AccountStatusConverter::class)
    @Column(name = "account_status")
    var accountStatus: AccountStatus? = null
    var role: String? = null
    var email: String? = null
    var biography: String? = null

    @CreationTimestamp
    @Column(name = "created_on")
    var createdOn: LocalDateTime? = null

    @UpdateTimestamp
    @Column(name = "updated_on")
    var updatedOn: LocalDateTime? = null

    @Column(name = "display_name")
    private var displayName: String? = null

    @Column(name = "picture_url")
    var pictureUrl: String? = null

    // added a bunch of json ignore
    @JsonIgnore
    @OneToMany(mappedBy = "user")
    var carts: List<Cart>? = null

    @JsonBackReference(value = "sender")
    @OneToMany(mappedBy = "sender")
    var sentMessages: List<Message>? = null

    @JsonBackReference(value = "recipient")
    @OneToMany(mappedBy = "recipient")
    var receivedMessages: List<Message>? = null

    @JsonIgnore
    @OneToMany(mappedBy = "creator")
    var createdTokens: List<Token>? = null

    @JsonIgnore
    @OneToMany(mappedBy = "owner")
    var ownedTokens: List<Token>? = null

    @JsonIgnore
    @OneToMany(mappedBy = "creator")
    var collectionsCreated: List<Collection>? = null

    @JsonIgnore
    @OneToMany(mappedBy = "seller")
    var sellerTransfers: List<TokenTx>? = null

    @JsonIgnore
    @OneToMany(mappedBy = "buyer")
    var buyerTransfers: List<TokenTx>? = null
    override fun getDescription(): String {
        return ""
    }

    override fun getType(): String {
        return "User"
    }

    override fun getDisplayName(): String {
        return displayName!!
    }

    fun setDisplayName(displayName: String?) {
        this.displayName = displayName
    }

    override fun equals(o: Any?): Boolean {
        if (this === o) return true
        if (o == null || javaClass != o.javaClass) return false
        val user = o as User
        return id == user.id && username == user.username && displayName == user.displayName
    }

    override fun hashCode(): Int {
        return Objects.hash(id, username, displayName)
    }

    override fun toString(): String {
        return "User{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", accountStatus=" + accountStatus +
                ", role='" + role + '\'' +
                ", email='" + email + '\'' +
                ", biography='" + biography + '\'' +
                ", createdOn=" + createdOn +
                ", updatedOn=" + updatedOn +
                ", displayName='" + displayName + '\'' +
                ", pictureUrl='" + pictureUrl + '\'' +
                '}'
    }
}
