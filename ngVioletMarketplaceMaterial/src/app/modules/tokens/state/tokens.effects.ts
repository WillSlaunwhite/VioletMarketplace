import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { TokenService } from '../services/token.service';
import { loadTokens, loadTokensFailure, loadTokensSuccess } from './tokens.actions';

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

  constructor(private actions$: Actions, private tokenService: TokenService) { }
}
