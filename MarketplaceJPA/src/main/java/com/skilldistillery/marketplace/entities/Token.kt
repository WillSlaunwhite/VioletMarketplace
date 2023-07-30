package com.skilldistillery.marketplace.entities

import com.fasterxml.jackson.annotation.JsonIgnore
import com.skilldistillery.marketplace.converters.RarityConverter
import com.skilldistillery.marketplace.converters.StatusConverter
import com.skilldistillery.marketplace.enums.Rarity
import com.skilldistillery.marketplace.enums.Status
import com.skilldistillery.marketplace.interfaces.Searchable
import org.hibernate.annotations.CreationTimestamp
import org.hibernate.annotations.UpdateTimestamp
import java.time.LocalDate
import java.util.*
import javax.persistence.*

@Entity
class Token : Searchable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id = 0
    var name: String? = null
    private var description: String? = null
    var price = 0

    @Convert(converter = StatusConverter::class)
    var status: Status? = null

    @Convert(converter = RarityConverter::class)
    var rarity: Rarity? = null

    @CreationTimestamp
    @Column(name = "release_date")
    var releaseDate: LocalDate? = null

    @UpdateTimestamp
    @Column(name = "updated_on")
    var updatedOn: LocalDate? = null

    @Column(name = "token_location")
    var tokenLocation: String? = null

    @ManyToOne
    @JoinColumn(name = "collection_id")
    var collection: Collection? = null

    @JsonIgnore // added this and had to fix tx getters and setters for me
    @OneToMany(mappedBy = "token")
    var transfers: List<TokenTx>? = null

    @ManyToOne
    @JoinColumn(name = "creator_id")
    var creator: User? = null

    @ManyToOne
    @JoinColumn(name = "owner_id")
    var owner: User? = null

    // update constructors and getters and setters once mappings are added
    constructor() : super()
    constructor(
        id: Int,
        name: String?,
        description: String?,
        price: Int,
        status: Status?,
        rarity: Rarity?,
        releaseDate: LocalDate?,
        updatedOn: LocalDate?,
        tokenLocation: String?,
        collection: Collection?,
        transfers: List<TokenTx>?,
        creator: User?,
        owner: User?
    ) {
        this.id = id
        this.name = name
        this.description = description
        this.price = price
        this.status = status
        this.rarity = rarity
        this.releaseDate = releaseDate
        this.updatedOn = updatedOn
        this.tokenLocation = tokenLocation
        this.collection = collection
        this.transfers = transfers
        this.creator = creator
        this.owner = owner
    }

    override fun getType(): String {
        return "Token"
    }

    override fun getDisplayName(): String {
        return ""
    }

    override fun getDescription(): String {
        return description!!
    }

    fun setDescription(description: String?) {
        this.description = description
    }

    override fun equals(o: Any?): Boolean {
        if (this === o) return true
        if (o == null || javaClass != o.javaClass) return false
        val token = o as Token
        return id == token.id && price == token.price && name == token.name && description == token.description && status === token.status && rarity === token.rarity && releaseDate == token.releaseDate && updatedOn == token.updatedOn && tokenLocation == token.tokenLocation && collection == token.collection && transfers == token.transfers && creator == token.creator && owner == token.owner
    }

    override fun hashCode(): Int {
        return Objects.hash(
            id,
            name,
            description,
            price,
            status,
            rarity,
            releaseDate,
            updatedOn,
            tokenLocation,
            collection,
            transfers,
            creator,
            owner
        )
    }

    override fun toString(): String {
        return "Token{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", price=" + price +
                ", status=" + status +
                ", rarity=" + rarity +
                ", releaseDate=" + releaseDate +
                ", updatedOn=" + updatedOn +
                ", tokenLocation='" + tokenLocation + '\'' +
                '}'
    }
}
