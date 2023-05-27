import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { login, loginSuccess, loginFailure, logout, logoutSuccess, logoutFailure, setJwt } from './auth.actions';
import { AuthService } from '../services/auth.service';
import { Store } from '@ngrx/store';


@Injectable()
export class AuthEffects {
  login$ = createEffect(() => this.actions$.pipe(
    ofType(login),
    mergeMap(({ username, password }) => this.authService.login(username, password)
      .pipe(
        map(({ user, jwt }) => {
          this.store.dispatch(setJwt({ jwt }));
          return loginSuccess({ user })
        }),
        catchError(error => of(loginFailure({ error })))
      )
    )
  ));

  logout$ = createEffect(() => this.actions$.pipe(
    ofType(logout),
    mergeMap(() => this.authService.logout()
      .pipe(
        map(() => logoutSuccess()),
        catchError(error => of(logoutFailure({ error })))
      )
    )
  ));

  constructor(private actions$: Actions, private authService: AuthService, private store: Store) {
  }
}
