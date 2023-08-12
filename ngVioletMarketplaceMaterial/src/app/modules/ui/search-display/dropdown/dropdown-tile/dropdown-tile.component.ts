import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SearchResultItem } from 'src/app/models/search-result-item';
import Token from 'src/app/models/token';
import User from 'src/app/models/user';

@Component({
  selector: 'app-dropdown-tile',
  templateUrl: './dropdown-tile.component.html',
  styleUrls: ['./dropdown-tile.component.scss']
})
export class DropdownTileComponent implements OnInit {
  @Input() result: Observable<SearchResultItem | null> = of(null);
  userItem: User | null = null;
  tokenItem: Token | null = null;


  constructor() { }

  ngOnInit(): void {
    this.result.subscribe(searchItem => {
      if(searchItem && this.isUser(searchItem.item)) {
        this.userItem = searchItem.item
      } else if(searchItem && this.isToken(searchItem.item)) {
        this.tokenItem = searchItem.item;

      }
    });
  }

  isUser(obj: User | Token): obj is User {
    return (obj as User).username !== undefined; // or other properties specific to User
  }
  
  isToken(obj: User | Token): obj is Token {
    return (obj as Token).name !== undefined; // or other properties specific to Token
  }
  

}
