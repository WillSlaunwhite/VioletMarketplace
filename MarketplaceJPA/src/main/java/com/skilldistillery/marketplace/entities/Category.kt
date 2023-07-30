package com.skilldistillery.marketplace.entities

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

@Entity
class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id = 0
    var type: String? = null
    var description: String? = null

    constructor() : super()
    constructor(id: Int, type: String?, description: String?) : super() {
        this.id = id
        this.type = type
        this.description = description
    }

    override fun toString(): String {
        return "Category [id=" + id + ", type=" + type + ", description=" +
                description + "]"
    }
}
