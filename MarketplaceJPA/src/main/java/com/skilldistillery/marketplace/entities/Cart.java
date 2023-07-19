package com.skilldistillery.marketplace.entities;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

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

	@CreationTimestamp
	@Column(name = "created_on")
	private LocalDate createdOn;

	@UpdateTimestamp
	@Column(name = "updated_on")
	private LocalDate updatedOn;

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

	public LocalDate getUpdatedOn() {
		return updatedOn;
	}

	public void setUpdatedOn(LocalDate updatedOn) {
		this.updatedOn = updatedOn;
	}

	public LocalDate getCreatedOn() {
		return createdOn;
	}

	public void setCreatedOn(LocalDate createdOn) {
		this.createdOn = createdOn;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		Cart cart = (Cart) o;
		return id == cart.id && completed == cart.completed && Objects.equals(user, cart.user) && Objects.equals(createdOn, cart.createdOn) && Objects.equals(updatedOn, cart.updatedOn) && Objects.equals(items, cart.items);
	}

	@Override
	public int hashCode() {
		return Objects.hash(id, completed, user, createdOn, updatedOn, items);
	}

	@Override
	public String toString() {
		return "Cart{" +
				"id=" + id +
				", completed=" + completed +
				", user=" + user +
				", createdOn=" + createdOn +
				", updatedOn=" + updatedOn +
				", items=" + items +
				'}';
	}
}
