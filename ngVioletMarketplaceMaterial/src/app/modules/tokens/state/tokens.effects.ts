import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { TokenService } from '../services/token.service';
import { loadTokens, loadTokensFailure, loadTokensSuccess, loadUserTokens, loadUserTokensFailure, loadUserTokensSuccess } from './tokens.actions';

@Injectable()
export class TokenEffects {
  loadTokens$ = createEffect(() => this.actions$.pipe(
    ofType(loadTokens),
    mergeMap(() => this.tokenService.index()
      .pipe(
        map(tokens => loadTokensSuccess({ tokens })),
        catchError(error => of(loadTokensFailure({ error })))
      )
    )
  ));

  loadUserTokens$ = createEffect(() => this.actions$.pipe(
    ofType(loadUserTokens),
    mergeMap(action => this.tokenService.getByUsername(action.username)
      .pipe(
        map(tokens => loadUserTokensSuccess({ tokens })),
        catchError(error => of(loadUserTokensFailure({ error })))
      )
    )
  ));
  constructor(private actions$: Actions, private tokenService: TokenService) { }
}
