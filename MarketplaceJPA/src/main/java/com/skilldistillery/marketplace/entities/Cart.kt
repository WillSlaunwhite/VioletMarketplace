package com.skilldistillery.marketplace.entities

import org.hibernate.annotations.CreationTimestamp
import org.hibernate.annotations.UpdateTimestamp
import java.time.LocalDate
import java.util.*
import javax.persistence.*

@Entity
class Cart {
    // update constructors and getters and setters once mappings are added
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id = 0
    var isCompleted = false

    @ManyToOne
    @JoinColumn(name = "user_id")
    var user: User? = null

    @CreationTimestamp
    @Column(name = "created_on")
    var createdOn: LocalDate? = null

    @UpdateTimestamp
    @Column(name = "updated_on")
    var updatedOn: LocalDate? = null

    @OneToMany(mappedBy = "cart")
    private var items: MutableList<CartItem>
    fun getItems(): List<CartItem> {
        return items
    }

    fun setItems(items: MutableList<CartItem>) {
        this.items = items
    }

    init {
        items = ArrayList()
    }

    fun addCartItem(newItem: CartItem): List<CartItem> {
        return if (!items.contains(newItem)) {
            items.add(newItem)
            items
        } else {
            items
        }
    }

    fun removeCartItem(newItem: CartItem): List<CartItem> {
        return if (items.contains(newItem)) {
            items.remove(newItem)
            items
        } else {
            items
        }
    }

    override fun equals(o: Any?): Boolean {
        if (this === o) return true
        if (o == null || javaClass != o.javaClass) return false
        val cart = o as Cart
        return id == cart.id && isCompleted == cart.isCompleted && user == cart.user && createdOn == cart.createdOn && updatedOn == cart.updatedOn && items == cart.items
    }

    override fun hashCode(): Int {
        return Objects.hash(id, isCompleted, user, createdOn, updatedOn, items)
    }

    override fun toString(): String {
        return "Cart{" +
                "id=" + id +
                ", completed=" + isCompleted +
                ", user=" + user +
                ", createdOn=" + createdOn +
                ", updatedOn=" + updatedOn +
                ", items=" + items +
                '}'
    }
}
