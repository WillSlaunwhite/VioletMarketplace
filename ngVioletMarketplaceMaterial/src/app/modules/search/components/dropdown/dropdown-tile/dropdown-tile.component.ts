import { Component, Input, OnInit } from '@angular/core';
import { Searchable } from '../../../searchable';
import Token from 'src/app/models/token';
import User from 'src/app/models/user';

type SearchResultItem = {
  item: User | Token;
  type: 'user' | 'token'
}
@Component({
  selector: 'app-dropdown-tile',
  templateUrl: './dropdown-tile.component.html',
  styleUrls: ['./dropdown-tile.component.scss']
})
export class DropdownTileComponent implements OnInit {
  @Input() result: SearchResultItem | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
