package com.skilldistillery.marketplace.entities;


import javax.persistence.*;
import java.time.LocalDate;

@Entity
public class Collection {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String name;

	private String description;
	
	@ManyToOne
	@JoinColumn(name="created_by")
	private User creator;

	@Column(name = "release_date")
	private LocalDate releaseDate;

	// update constructors and getters and setters once mappings are added

	
	
	public Collection() {
		super();
	}

	public Collection(int id, String name, String description, LocalDate releaseDate) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.releaseDate = releaseDate;
	}
	
	

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public LocalDate getReleaseDate() {
		return releaseDate;
	}

	public void setReleaseDate(LocalDate releaseDate) {
		this.releaseDate = releaseDate;
	}

	public User getCreator() {
		return creator;
	}

	public void setCreator(User creator) {
		this.creator = creator;
	}

	@Override
	public String toString() {
		return "Collection [id=" + id + ", name=" + name + ", description=" +
				description + ", releaseDate=" + releaseDate + "]";
	}

}
