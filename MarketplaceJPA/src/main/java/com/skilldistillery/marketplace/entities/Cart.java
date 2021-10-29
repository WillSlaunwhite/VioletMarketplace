package com.skilldistillery.marketplace.entities;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class Cart {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private boolean completed;

	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;

	@Column(name = "created_date")
	private LocalDate createdDate;

	@OneToMany(mappedBy = "cart")
	private List<CartItem> items;

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public List<CartItem> getItems() {
		return items;
	}

	public void setItems(List<CartItem> items) {
		this.items = items;
	}

	public Cart() {

		items = new ArrayList<CartItem>();
		completed = false;
		createdDate = LocalDate.now();

	}

	public List<CartItem> addCartItem(CartItem newItem) {
		if (!this.items.contains(newItem)) {
			this.items.add(newItem);
			return items;
		} else {
			return items;
		}
	}

	public List<CartItem> removeCartItem(CartItem newItem) {
		if (this.items.contains(newItem)) {
			this.items.remove(newItem);
			return items;
		} else {
			return items;
		}
	}

	// update constructors and getters and setters once mappings are added

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public boolean isCompleted() {
		return completed;
	}

	public void setCompleted(boolean completed) {
		this.completed = completed;
	}

	public LocalDate getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(LocalDate createdDate) {
		this.createdDate = createdDate;
	}

	@Override
	public String toString() {
		return "Cart [id=" + id + ", completed=" + completed + ", user=" + user + ", createdDate=" + createdDate
				+ ", items=" + items + "]";
	}

}
