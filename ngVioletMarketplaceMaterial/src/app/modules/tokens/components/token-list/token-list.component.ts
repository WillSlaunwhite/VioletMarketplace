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

  // scrollLeft(tokensContainer: HTMLElement): void {
  //   if (tokensContainer) {

  //     tokensContainer.scrollLeft -= 250;
  //   }
  // }

  // scrollRight(tokensContainer: HTMLElement): void {
  //   if (tokensContainer) {
  //     tokensContainer.scrollLeft += 250;
  //   }
  // }



  scrollInterval: any;
  velocity: any;

  // startScrollLeft(tokensContainer: HTMLElement): void {
  //   this.stopScroll(); // Stop any existing scroll
  //   const scrollStep = () => {
  //     if (tokensContainer) {
  //       tokensContainer.scrollLeft -= 9; // Small step for smooth scrolling
  //       this.scrollInterval = requestAnimationFrame(scrollStep);
  //     }
  //   }; // Adjust time for faster or slower scrolling
  //   this.scrollInterval = requestAnimationFrame(scrollStep);
  // }

  // startScrollRight(tokensContainer: HTMLElement): void {
  //   this.stopScroll(); // Stop any existing scroll
  //   const scrollStep = () => {
  //     if (tokensContainer) {
  //       tokensContainer.scrollLeft += 5.5; // Small step for smooth scrolling
  //       this.scrollInterval = requestAnimationFrame(scrollStep);
  //     }
  //   }; // Adjust time for faster or slower scrolling
  //   this.scrollInterval = requestAnimationFrame(scrollStep);
  // }


  startScrollLeft(tokensContainer: HTMLElement): void {
    this.stopScroll();
    this.velocity = -10; // initial velocity
    const scrollStep = () => {
      if (tokensContainer) {
        tokensContainer.scrollLeft += this.velocity;
        this.velocity *= 0.95; // deceleration factor
        if (Math.abs(this.velocity) > 0.5) { // stop when velocity is low enough
          this.scrollInterval = requestAnimationFrame(scrollStep);
        }
      }
    };
    this.scrollInterval = requestAnimationFrame(scrollStep);
  }

  startScrollRight(tokensContainer: HTMLElement): void {
    this.stopScroll();
    this.velocity = 10; // initial velocity
    const scrollStep = () => {
      if (tokensContainer) {
        tokensContainer.scrollLeft += this.velocity;
        this.velocity *= 0.95; // deceleration factor
        if (Math.abs(this.velocity) > 0.5) { // stop when velocity is low enough
          this.scrollInterval = requestAnimationFrame(scrollStep);
        }
      }
    };
    this.scrollInterval = requestAnimationFrame(scrollStep);
  }






  stopScroll(): void {
    // cancelAnimationFrame(this.scrollInterval);
  }

  scrollFarLeft(tokensContainer: HTMLElement): void {
    tokensContainer.scrollLeft -= 100; // adjust this value as needed
  }

  scrollFarRight(tokensContainer: HTMLElement): void {
    tokensContainer.scrollLeft += 100; // adjust this value as needed
  }

  mouseleaveScroll(): void {
    // Call this method on mouseleave instead of stopScroll
    this.velocity *= 0.5; // rapid deceleration factor
  }
}
