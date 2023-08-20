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
import javax.persistence.*
import kotlin.jvm.Transient

@Entity
data class Token(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Int = 0,
    var name: String,
    override var description: String,
    var price: Int = 0,
    @Convert(converter = StatusConverter::class)
    var status: Status,
    @Convert(converter = RarityConverter::class)
    var rarity: Rarity,
    @CreationTimestamp @Column(name = "release_date")
    var releaseDate: LocalDate,
    @UpdateTimestamp @Column(name = "updated_on")
    var updatedOn: LocalDate,
    @Column(name = "token_location")
    var tokenLocation: String,
    @ManyToOne @JoinColumn(name = "collection_id")
    var collection: Collection,
    @OneToMany(mappedBy = "token") @JsonIgnore
    var transfers: Set<Transaction> = emptySet(),
    @ManyToOne @JoinColumn(name = "creator_id")
    var creator: User,
    @ManyToOne @JoinColumn(name = "owner_id")
    var owner: User,
    @OneToMany(mappedBy = "token")
    var views: Set<TokenView> = emptySet(),

) : Searchable {
    @Transient
    override val displayName: String = name
    @Transient
    override val type: String = "Token"


    @Override
    override fun toString(): String {
        return this::class.simpleName + "(id = $id , name = $name , description = $description , price = $price , status = $status , rarity = $rarity , owner = $owner )"
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (javaClass != other?.javaClass) return false

        other as Token

        if (id != other.id) return false
        return owner == other.owner
    }

    override fun hashCode(): Int {
        var result = id
        result = 31 * result + owner.hashCode()
        return result
    }

}
