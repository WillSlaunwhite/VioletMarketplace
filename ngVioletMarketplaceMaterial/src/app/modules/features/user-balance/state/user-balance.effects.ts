import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { UserBalanceService } from '../user-balance.service';
import { UserCurrencyBalance } from '../user-balance.models';
import * as UserBalanceActions from './user-balance.actions';

@Injectable()
export class UserBalanceEffects {
  getBalances$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserBalanceActions.getBalances),
      mergeMap((action) =>
        this.userBalanceService.getAllBalances(action.userId).pipe(
          map((balances) =>
            UserBalanceActions.getBalancesSuccess({ balances })
          ),
          catchError((error) =>
            of(UserBalanceActions.getBalancesFailure({ error }))
          )
        )
      )
    )
  );

  credit$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserBalanceActions.credit),
      mergeMap((action) =>
        this.userBalanceService
          .credit(action.userId, action.currencyType, action.amount)
          .pipe(
            map((balance) => UserBalanceActions.creditSuccess({ balance })),
            catchError((error) =>
              of(UserBalanceActions.creditFailure({ error }))
            )
          )
      )
    )
  );

  debit$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserBalanceActions.debit),
      mergeMap((action) =>
        this.userBalanceService
          .debit(action.userId, action.currencyType, action.amount)
          .pipe(
            map((balance) => UserBalanceActions.debitSuccess({ balance })),
            catchError((error) =>
              of(UserBalanceActions.debitFailure({ error }))
            )
          )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private userBalanceService: UserBalanceService
  ) {}
}
