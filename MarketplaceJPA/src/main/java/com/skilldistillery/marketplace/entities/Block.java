package com.skilldistillery.marketplace.entities;

import java.util.Arrays;

public class Block {
//	private String[] transactions;
	private final int hash;
	private int index;
	private final int previousHash;
	private final int tokenHash;  // this is the hash code string that allows the block to refer to the token object stored in the database
	private final long timeStamp; // need to eventually make this a creation time stamp.
//	private int nonce; 		to be implemented much later
	
	public Block(int hash, int tokenHash, int previousHash, long timeStamp) {
//		this.transactions = transactions;
		this.hash = hash;
		this.tokenHash = tokenHash;
		this.previousHash = previousHash;
		this.timeStamp = timeStamp;
	}
}
