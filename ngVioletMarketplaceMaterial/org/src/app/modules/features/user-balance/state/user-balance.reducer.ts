import { createReducer, on } from '@ngrx/store';
import { UserCurrencyBalance } from '../user-balance.models';
import { getBalances, getBalancesSuccess, getBalancesFailure, credit, creditSuccess, creditFailure, debit, debitSuccess, debitFailure } from './user-balance.actions';

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
  on(getBalances, (state) => ({ ...state, loading: true })),
  on(getBalancesSuccess, (state, { balances }) => ({
    ...state,
    balances,
    loading: false,
  })),
  on(getBalancesFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),

  on(credit, (state) => ({ ...state, loading: true })),
  on(creditSuccess, (state, { balance }) => {
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
  on(creditFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),

  on(debit, (state) => ({ ...state, loading: true })),
  on(debitSuccess, (state, { balance }) => {
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
  on(debitFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);
