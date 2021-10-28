package com.skilldistillery.marketplace.entities;

import javax.persistence.Entity;
//import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="cart_item")
public class CartItem {
	
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private int id;
	
//	@OneToOne(fetch = FetchType.LAZY)
	
	@OneToOne
	@JoinColumn(name = "token_id")
	private Token token;

	@ManyToOne
	@JoinColumn(name = "cart_id")
	private Cart cart;

	@Override
	public String toString() {
		return "CartItem [id=" + id + ", token=" + token + ", cart=" + cart + "]";
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Token getToken() {
		return token;
	}

	public void setToken(Token token) {
		this.token = token;
	}

	public Cart getCart() {
		return cart;
	}

	public void setCart(Cart cart) {
		this.cart = cart;
	}
	

}
