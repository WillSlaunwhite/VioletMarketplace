import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { login, loginSuccess, loginFailure, logout, logoutSuccess, logoutFailure, setJwt } from './user.actions';
import { AuthService } from '../../auth/services/auth.service';
import { Store } from '@ngrx/store';
import { UserService } from '../services/user.service';


@Injectable()
export class AuthEffects {
  login$ = createEffect(() => this.actions$.pipe(
    ofType(login),
    mergeMap(({ username, password }) => {
      console.log('login effect triggered');
      return this.userSvc.login(username, password)
        .pipe(
          switchMap((jwt) => {
            this.store.dispatch(setJwt({ jwt }));
            return this.userSvc.getUserByUsername(username).pipe(
              map((user) => loginSuccess({ user })),
              catchError(error => of(loginFailure({ error })))
            );
          }),
          catchError(error => of(loginFailure({ error })))
        )
    })
  ));


  logout$ = createEffect(() => this.actions$.pipe(
    ofType(logout),
    mergeMap(() => {
      return this.userSvc.logout()
        .pipe(
          map(() => logoutSuccess()),
          catchError(error => of(logoutFailure({ error })))
        )
    })
  ));

  constructor(private actions$: Actions, private auth: AuthService, private userSvc: UserService, private store: Store) {
  }
}
