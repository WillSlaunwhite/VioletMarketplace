import { createAction, props } from '@ngrx/store';
import { UserCurrencyBalance } from '../user-balance.models';

export const getBalances = createAction('[User Balance] Get Balances', props<{ userId: number }>());
export const getBalancesSuccess = createAction('[User Balance] Get Balances Success', props<{ balances: UserCurrencyBalance[] }>());
export const getBalancesFailure = createAction('[User Balance] Get Balances Failure', props<{ error: any }>());

export const credit = createAction('[User Balance] Credit', props<{ userId: number, currencyType: string, amount: number }>());
export const creditSuccess = createAction('[User Balance] Credit Success', props<{ balance: UserCurrencyBalance }>());
export const creditFailure = createAction('[User Balance] Credit Failure', props<{ error: any }>());

export const debit = createAction('[User Balance] Debit', props<{ userId: number, currencyType: string, amount: number }>());
export const debitSuccess = createAction('[User Balance] Debit Success', props<{ balance: UserCurrencyBalance }>());
export const debitFailure = createAction('[User Balance] Debit Failure', props<{ error: any }>());
