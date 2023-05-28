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

  constructor(private store: Store, private auth: AuthService) {
    // console.log('helllllloooooo');
    // this.tokens$.subscribe((tokens) => {
    //   console.log(tokens);
    //   if (!tokens || tokens.length === 0) {
    //     this.tokens$ = this.store.select(getAllTokens);
    //   }
    // });
  }

  ngOnInit(): void {
    console.log('hello1')
    this.user$ = this.auth.currentUser;
    console.log('hello2')

    const allTokens$ = this.store.select(getAllTokens);
    const userTokens$ = this.user$.pipe(
      filter(user => true),
      switchMap(user => this.store.select(getUserTokens))
    );

    this.tokens$ = combineLatest([this.user$, allTokens$, userTokens$]).pipe(
      tap(([user, allTokens, userTokens]) => {
        console.log('hello3')
        if (user) {
          console.log('hellllooo4')
          if (!userTokens || userTokens.length === 0) {
            this.store.dispatch(loadUserTokens({ username: user.username }));
          }
        } else {
          console.log('hellllooo5')
          if (!allTokens || allTokens.length === 0) {
            this.store.dispatch(loadTokens());
          }
        }
      }),
      map(([user, allTokens, userTokens]) => user ? userTokens : allTokens)
    );


    // this.tokens$ = this.user$.pipe(
    //   mergeMap(user =>  user ? this.store.select(getUserTokens) : this.store.select(getAllTokens)),
    //   tap(tokens => {
    //     if(!tokens || tokens.length === 0) {
    //       this.store.dispatch(this.user$.pipe(
    //         tap(user => user ?
    //           this.store.dispatch(loadUserTokens({username: user.username})) :
    //           this.store.dispatch(loadTokens())
    //           )
    //       ));
    //     }
    //   })
    // )


    // this.tokens$ = this.user$.pipe(
    //   tap(() => { console.log('hello3') }),
    //   mergeMap(user => {
    //     if (user) {
    //       console.log('hellllooo4')
    //       this.store.dispatch(loadUserTokens({ username: user.username }));
    //       return this.store.select(getUserTokens);
    //     } else {
    //       console.log('hellllooo5');
    //       this.store.dispatch(loadTokens());
    //       return this.store.select(getAllTokens);
    //     }
    //   }),
    // );

    // this.tokens$ = this.user$.pipe(
    //   mergeMap(user => {
    //     if (user) {
    //       this.store.dispatch(loadUserTokens({ username: user.username }));
    //       return this.store.select(getUserTokens);
    //     } else {
    //       this.store.dispatch(loadTokens());
    //       return this.store.select(getAllTokens);
    //     }
    //   }),
    //   tap(tokens => {
    //     if (!tokens || tokens.length === 0) {
    //       this.store.dispatch(loadTokens());
    //     }
    //   })
    // );


    // user$.subscribe((user) => {
    //   console.log(user);
    //   if (user) {
    //     console.log('hellohello2');
    //     this.store.select(getUserTokens);
    //     this.store.dispatch(loadUserTokens({ username: user.username }));
    //   } else {
    //     console.log('hellohello');

    //     this.store.dispatch(loadTokens());
    //     this.tokens$ = this.store.select(getAllTokens);
    //   }
    // });

    // this.store.dispatch(loadUserTokens({username: user$.username}));
    //   this.tokens$ = this.store.select(getUserTokens);
    // } else {
    //   this.store.dispatch(loadTokens());
    //   this.tokens$ = this.store.select(getAllTokens);
    // }


    // this.tokens$ = this.store.select(getUserTokens);

    // this.tokens$.pipe(
    //   take(1),
    //   tap((tokens: Token[] | null) => {
    //     if (!tokens) {
    //       this.store.dispatch(loadTokens());
    //       this.tokens$ = this.store.select(getAllTokens);
    //     }
    //   })
    // ).subscribe();

    // this.auth.currentUser.pipe(
    //   withLatestFrom(this.tokens$),                                   // * Combine with tokens$
    //   tap(([user, tokens]: [User | null, Token[] | null]) => {        // * if tokens$ is empty
    //     if (!tokens && user) {                                        // * we load user's tokens
    //       this.store.dispatch(loadUserTokens({ username: user.username }));
    //     }
    //   })
    // ).subscribe();
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
