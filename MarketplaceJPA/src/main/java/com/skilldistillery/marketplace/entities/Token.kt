package com.skilldistillery.marketplace.entities

import com.skilldistillery.marketplace.converters.RarityConverter
import com.skilldistillery.marketplace.converters.StatusConverter
import com.skilldistillery.marketplace.dtos.CommonTokenDTO
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
    @OneToMany(mappedBy = "token")
    var transfers: List<TokenTx>,
    @ManyToOne @JoinColumn(name = "creator_id")
    var creator: User,
    @ManyToOne @JoinColumn(name = "owner_id")
    var owner: User,

) : Searchable {
    @Transient
    override val displayName: String = name
    @Transient
    override val type: String = "Token"

    @Override
    override fun toString(): String {
        return this::class.simpleName + "(id = $id , name = $name , description = $description , price = $price , status = $status , rarity = $rarity , owner = $owner )"
    }

}
