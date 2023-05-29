import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import Token from 'src/app/models/token';
import { Observable, combineLatest, filter, map, mergeMap, of, switchMap, take, tap, withLatestFrom } from 'rxjs';
import { getAllTokens, getUserTokens } from '../../state/tokens.selectors';
import { loadTokens, loadUserTokens } from '../../state/tokens.actions';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import User from 'src/app/models/user';

@Component({
  selector: 'app-token-list',
  templateUrl: './token-list.component.html',
  styleUrls: ['./token-list.component.scss']
})
export class TokenListComponent implements OnInit {
  tokens$: Observable<Token[] | null> = of(null);
  user$: Observable<User | null> = of(null);
  scrollInterval: any;
  velocity: any;

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

  startScrollLeft(tokensContainer: HTMLElement): void {
    this.stopScroll();
    this.velocity = -7; // initial velocity
    const scrollStep = () => {
      if (tokensContainer) {
        tokensContainer.scrollLeft += this.velocity;
        if (Math.abs(this.velocity) > 3.75) { // stop when velocity is low enough
          this.scrollInterval = requestAnimationFrame(scrollStep);
        }
        else if (Math.abs(this.velocity) >= 0.5) { // stop when velocity is low enough
          this.scrollInterval = requestAnimationFrame(scrollStep);
          this.velocity *= .9;
        }
      }
    };
    this.scrollInterval = requestAnimationFrame(scrollStep);
  }

  startScrollRight(tokensContainer: HTMLElement): void {
    this.stopScroll()
    this.velocity = 7; // initial velocity
    const scrollStep = () => {
      if (tokensContainer) {
        tokensContainer.scrollLeft += this.velocity;
        if (Math.abs(this.velocity) > 3.75) { // stop when velocity is low enough
          this.scrollInterval = requestAnimationFrame(scrollStep);
        }
        else if (Math.abs(this.velocity) >= 0.5) { // stop when velocity is low enough
          this.scrollInterval = requestAnimationFrame(scrollStep);
          this.velocity *= .9;
        }
      }
    };
    this.scrollInterval = requestAnimationFrame(scrollStep);
  }

  mouseleaveScroll(): void {
    this.velocity *= .45; // rapid deceleration factor
  }

  stopScroll(): void {
    if (this.scrollInterval) {
      cancelAnimationFrame(this.scrollInterval);
      this.scrollInterval = null;
    }
  }


  scrollFarLeft(tokensContainer: HTMLElement): void {
    tokensContainer.scrollLeft -= 50; // adjust this value as needed
  }

  scrollFarRight(tokensContainer: HTMLElement): void {
    tokensContainer.scrollLeft += 50; // adjust this value as needed
  }

}
