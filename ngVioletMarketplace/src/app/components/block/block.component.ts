import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {
  constructor(index, timestamp, tokenHash, previousHash = '') { }
  SHA256 = require('crypto-js/sha256');



  calculateHash() {
    return this.SHA256(this.index + this.previousHash + this.timestamp + tokenHash)
  }

  ngOnInit(): void {
  }

}
