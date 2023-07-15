import { Component, OnInit } from '@angular/core';
import { Searchable } from '../../searchable';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectSearchResults } from '../../state/search.selectors';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  searchResults$: Observable<Searchable[] | null> = of(null);

  constructor(private store: Store) {
    this.searchResults$ = this.store.select(selectSearchResults);
  }

  ngOnInit(): void {
    console.log(this.searchResults$);
  }

}
