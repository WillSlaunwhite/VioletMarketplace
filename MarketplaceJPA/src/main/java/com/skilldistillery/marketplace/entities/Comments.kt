package com.skilldistillery.marketplace.entities

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

@Entity
class Comments {
    @JvmField @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Int = 0
}