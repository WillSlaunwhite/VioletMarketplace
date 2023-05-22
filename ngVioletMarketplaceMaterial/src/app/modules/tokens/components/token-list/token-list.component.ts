import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import Token from 'src/app/models/token';
import { Observable, filter, of, take, tap, withLatestFrom } from 'rxjs';
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

  constructor(private store: Store, private auth: AuthService) {
  }

  ngOnInit(): void {
    this.tokens$ = this.store.select(getUserTokens);

    this.tokens$.pipe(
      take(1),
      tap((tokens: Token[] | null) => {
        if (!tokens) {
          this.store.dispatch(loadTokens());
          this.tokens$ = this.store.select(getAllTokens);
        }
      })
    ).subscribe();

    this.auth.currentUser.pipe(
      filter(user => user !== null),                                  // * ensure user is logged in
      withLatestFrom(this.tokens$),                                   // * Combine with tokens$
      tap(([user, tokens]: [User | null, Token[] | null]) => {        // * if tokens$ is empty
        if (!tokens && user) {                                        // * we load user's tokens
          this.store.dispatch(loadUserTokens({ username: user.username }));
        }
      })
    ).subscribe();
  }

  scrollInterval: any;
  velocity: any;

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
    console.log(this.velocity);
  }

  mouseleaveScroll(): void {
    // Call this method on mouseleave instead of stopScroll
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
