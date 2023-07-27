package com.skilldistillery.marketplace.entities;


import javax.persistence.*;

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
	
	public CartItem(Token newToken) {
		this.token = newToken;
		cart.addCartItem(this);
		
	}
	

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


	public CartItem() {
		super();
		// TODO Auto-generated constructor stub
	}
	

}
