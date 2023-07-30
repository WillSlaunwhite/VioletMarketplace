package com.skilldistillery.marketplace.entities

import java.time.LocalDate
import javax.persistence.*

@Entity
class Collection {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id = 0
    var name: String? = null
    var description: String? = null

    @ManyToOne
    @JoinColumn(name = "created_by")
    var creator: User? = null

    @Column(name = "release_date")
    var releaseDate: LocalDate? = null

    // update constructors and getters and setters once mappings are added
    constructor() : super()
    constructor(id: Int, name: String?, description: String?, releaseDate: LocalDate?) : super() {
        this.id = id
        this.name = name
        this.description = description
        this.releaseDate = releaseDate
    }

    override fun toString(): String {
        return "Collection [id=" + id + ", name=" + name + ", description=" +
                description + ", releaseDate=" + releaseDate + "]"
    }
}
