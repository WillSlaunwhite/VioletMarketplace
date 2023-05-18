import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import Token from 'src/app/models/token';
import { Observable, filter, tap } from 'rxjs';
import { getAllTokens } from '../../state/tokens.selectors';

@Component({
  selector: 'app-token-list',
  templateUrl: './token-list.component.html',
  styleUrls: ['./token-list.component.scss']
})
export class TokenListComponent implements OnInit {
  tokens$: Observable<Token[] | null>;

  constructor(private store: Store) {
    this.tokens$ = this.store.select(getAllTokens).pipe(
      filter(tokens => tokens !== null)
    );
  }

  ngOnInit(): void {
  }

}
