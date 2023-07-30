package com.skilldistillery.marketplace.entities

import javax.persistence.*

@Entity
@Table(name = "cart_item")
class CartItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id = 0

    //	@OneToOne(fetch = FetchType.LAZY)
    @OneToOne
    @JoinColumn(name = "token_id")
    var token: Token? = null

    @ManyToOne
    @JoinColumn(name = "cart_id")
    var cart: Cart? = null

    constructor(newToken: Token?) {
        token = newToken
        cart!!.addCartItem(this)
    }

    override fun toString(): String {
        return "CartItem [id=$id, token=$token, cart=$cart]"
    }

    constructor() : super()
}
