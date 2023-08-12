import { Component, OnInit } from '@angular/core';
import { SearchResultItem } from 'src/app/models/search-result-item';

@Component({
  selector: 'app-dropdown-container',
  templateUrl: './dropdown-container.component.html',
  styleUrls: ['./dropdown-container.component.scss']
})
export class DropdownContainerComponent implements OnInit {
  suggestions: SearchResultItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
