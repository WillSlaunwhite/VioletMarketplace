package com.skilldistillery.marketplace.entities

import java.time.LocalDate
import javax.persistence.*

@Entity
data class Collection (
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Int = 0,
    var name: String? = null,
    var description: String? = null,
    @ManyToOne
    @JoinColumn(name = "created_by")
    var creator: User? = null,
    @Column(name = "release_date")
    var releaseDate: LocalDate? = null,
) {

    override fun toString(): String {
        return "Collection [id=" + id + ", name=" + name + ", description=" +
                description + ", releaseDate=" + releaseDate + "]"
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (javaClass != other?.javaClass) return false

        other as Collection

        return id == other.id
    }

    override fun hashCode(): Int {
        return id
    }

}
