import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of, filter, switchMap, combineLatest, tap, map } from 'rxjs';
import User from 'src/app/models/user';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import Token from 'src/app/models/token';
import { loadUserTokens, loadTokens } from '../../../state/tokens.actions';
import { getAllTokens, getUserTokens } from '../../../state/tokens.selectors';

@Component({
  selector: 'app-big-token-list',
  templateUrl: './big-token-list.component.html',
  styleUrls: ['./big-token-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BigTokenListComponent implements OnInit {
  @Input()
  tokens$: Observable<Token[] | null> = of(null);

  user$: Observable<User | null> = of(null);
  scrollInterval: any;
  velocity: any;
  startIndex: number = 0;
  private previousScrollWidth = 0;
  tokensLoaded: boolean = false;

  constructor(private store: Store, private auth: AuthService) { }

  ngOnInit(): void {
    this.user$ = this.auth.currentUser;

    const allTokens$ = this.store.select(getAllTokens);
    const userTokens$ = this.user$.pipe(
      filter(user => true),
      switchMap(user => this.store.select(getUserTokens))
    );

    this.tokens$ = combineLatest([this.user$, allTokens$, userTokens$]).pipe(
      tap(([user, allTokens, userTokens]) => {
        if (user) {
          if (!userTokens || userTokens.length === 0) {
            this.store.dispatch(loadUserTokens({ username: user.username }));
          }
        } else {
          if (!allTokens || allTokens.length === 0) {
            this.store.dispatch(loadTokens());
          }
        }
      }),
      map(([user, allTokens, userTokens]) => user ? userTokens : allTokens)
    );
  }

  mouseleaveScroll(): void {
    this.velocity *= .45; // rapid deceleration factor
  }

  scrollFarLeft(tokensContainer: HTMLElement): void {
    tokensContainer.scrollLeft -= 50; // adjust this value as needed
  }

  scrollFarRight(tokensContainer: HTMLElement): void {
    tokensContainer.scrollLeft += 50; // adjust this value as needed
  }

}
