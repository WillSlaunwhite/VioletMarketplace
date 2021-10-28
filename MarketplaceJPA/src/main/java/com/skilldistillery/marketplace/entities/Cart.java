package com.skilldistillery.marketplace.entities;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Cart {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private boolean completed;
	
//	private User user;

	@Column(name="created_date")
	private LocalDate createdDate;
	
	
	// update constructors and getters and setters once mappings are added
	
	public Cart() { super(); }
	
	public Cart(int id, boolean completed, LocalDate createdDate) {
		super();
		this.id = id;
		this.completed = completed;
		this.createdDate = createdDate;
	}





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
		StringBuilder builder = new StringBuilder();
		builder.append("Cart [id=").append(id).append(", completed=").append(completed).append(", createdDate=")
				.append(createdDate).append("]");
		return builder.toString();
	}
	
	
}
