import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Searchable } from '../../searchable';
import { search } from '../../state/search.actions';
import { selectSearchResults } from '../../state/search.selectors';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit, AfterViewInit {
  searchResults$: Observable<Searchable[] | null> = of(null);

  users$: Observable<Searchable[] | []> = of([]);
  tokens$: Observable<Searchable[] | []> = of([]);

  constructor(private store: Store) {
    // * need to handle initial query better
    this.store.dispatch(search({ query: "all" }))
  }

  // * need to fix logic for loading results
  ngOnInit(): void {
    this.searchResults$ = this.store.select(selectSearchResults);
  }

  ngAfterViewInit(): void {
    this.searchResults$.subscribe(results => {
      console.log(results);
      if (results) {
        this.users$ = of(results.filter(result => result.type.toLowerCase() === 'user'));
        this.tokens$ = of(results.filter(result => result.type.toLowerCase() === 'token'));
      }
    });
    this.searchResults$.subscribe(results => console.log(results));
    this.tokens$.subscribe(results => console.log(results));
    this.users$.subscribe(results => console.log(results));
  }

}
