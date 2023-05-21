import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import Token from 'src/app/models/token';
import { Observable, filter, of, tap } from 'rxjs';
import { getAllTokens, getUserTokens } from '../../state/tokens.selectors';
import { loadTokens, loadUserTokens } from '../../state/tokens.actions';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-token-list',
  templateUrl: './token-list.component.html',
  styleUrls: ['./token-list.component.scss']
})
export class TokenListComponent implements OnInit {
  tokens$: Observable<Token[] | null> = of(null);

  constructor(private store: Store, private auth: AuthService) {
    // this.tokens$ = this.store.select(getAllTokens).pipe(
    //   filter(tokens => tokens !== null)
    // );
    this.auth.currentUser.subscribe(
      user => {
        if (user) {
          this.store.dispatch(loadUserTokens({ username: 'will' }));
          this.tokens$ = this.store.select(getUserTokens)
        } else {
          this.tokens$ = this.store.select(getAllTokens);
        }
      }
    );
  }

  ngOnInit(): void {
    this.store.dispatch(loadTokens());
    this.auth.currentUser.subscribe(
      user => {
        if (user) {
          this.store.dispatch(loadUserTokens({ username: 'will' }));
          this.tokens$ = this.store.select(getUserTokens)
        }
      }
    );
  }

}
