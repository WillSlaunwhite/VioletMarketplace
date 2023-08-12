import { Component, Input, OnInit } from '@angular/core';
import { SearchResultItem } from 'src/app/models/search-result-item';
import Token from 'src/app/models/token';
import User from 'src/app/models/user';

@Component({
  selector: 'app-dropdown-tile',
  templateUrl: './dropdown-tile.component.html',
  styleUrls: ['./dropdown-tile.component.scss']
})
export class DropdownTileComponent implements OnInit {
  @Input() result: SearchResultItem | null = null;
  userItem: User | null = null;
  tokenItem: Token | null = null;


  constructor() { }

  ngOnInit(): void {
    if (this.result && this.isUser(this.result.item)) {
      this.userItem = this.result.item;
    }
    if (this.result && this.isToken(this.result.item)) {
      this.tokenItem = this.result.item;
    }
  }

  isUser(obj: User | Token): obj is User {
    return (obj as User).username !== undefined; // or other properties specific to User
  }
  
  isToken(obj: User | Token): obj is Token {
    return (obj as Token).name !== undefined; // or other properties specific to Token
  }
  

}
