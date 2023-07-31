import { UserCurrencyBalance } from '../user-balance.models';
import { createReducer, on } from '@ngrx/store';
import * as UserBalanceActions from './user-balance.actions';

export interface UserBalanceState {
  balances: UserCurrencyBalance[];
  loading: boolean;
  error: string | null;
}

export const initialState: UserBalanceState = {
  balances: [],
  loading: false,
  error: null,
};

export const userBalanceReducer = createReducer(
  initialState,
  on(UserBalanceActions.getBalances, (state) => ({ ...state, loading: true })),
  on(UserBalanceActions.getBalancesSuccess, (state, { balances }) => ({
    ...state,
    balances,
    loading: false,
  })),
  on(UserBalanceActions.getBalancesFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),

  on(UserBalanceActions.credit, (state) => ({ ...state, loading: true })),
  on(UserBalanceActions.creditSuccess, (state, { balance }) => {
    const balances = [...state.balances];
    const index = balances.findIndex(
      (b) =>
        b.id.userId === balance.id.userId &&
        b.id.currencyType === balance.id.currencyType
    );
    if (index >= 0) {
      balances[index] = balance;
    } else {
      balances.push(balance);
    }
    return { ...state, balances, loading: false };
  }),
  on(UserBalanceActions.creditFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),

  on(UserBalanceActions.debit, (state) => ({ ...state, loading: true })),
  on(UserBalanceActions.debitSuccess, (state, { balance }) => {
    const balances = [...state.balances];
    const index = balances.findIndex(
      (b) =>
        b.id.userId === balance.id.userId &&
        b.id.currencyType === balance.id.currencyType
    );
    if (index >= 0) {
      balances[index] = balance;
    } else {
      balances.push(balance);
    }
    return { ...state, balances, loading: false };
  }),
  on(UserBalanceActions.debitFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);
