import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Searchable } from '../../searchable';
import { Observable, combineLatest, filter, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectSearchResults } from '../../state/search.selectors';
import { loadUserTokens, loadTokens } from 'src/app/modules/tokens/state/tokens.actions';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  searchResults$: Observable<Searchable[] | null> = of(null);

  users$: Observable<Searchable[] | []> = of([]);
  tokens$: Observable<Searchable[] | []> = of([]);

  constructor(private store: Store) {
    // this.searchResults$ = this.store.select(selectSearchResults);
    // this.searchResults$.pipe(map(results => {
    //   console.log(results);
    //   if (results) {
    //     this.users$ = of(results.filter(result => result.type.toLowerCase() === 'user'));
    //   }
    // }));
    // this.searchResults$.pipe(map(results => {
    //   if (results) {
    //     this.tokens$ = of(results.filter(result => result.type.toLowerCase() === 'token'));
    //   }
    // }));
  }

  // * need to fix logic for loading results
  ngOnInit(): void {
    this.searchResults$ = combineLatest([this.searchResults$, this.users$, this.tokens$]).pipe(
      tap(([user, users, tokens]) => {
        if (user) {
          if (!users || users.length === 0) {
            // this.store.dispatch(loadUserTokens({ username: user.username }));
          }
        } else {
          if (!tokens || tokens.length === 0) {
            // this.store.dispatch(loadTokens());
          }
        }
      }),
      map(([user, allTokens, userTokens]) => user ? userTokens : allTokens)
    );
  }

}
