package com.skilldistillery.marketplace.entities;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Message {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	private String content;
	
	@Column(name="created_at")
	private LocalDateTime createdAt;
	
//	private User sender;
	
//	private User recipient;
	
//	private User inReplyTo;
}
