import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserBalanceState } from './user-balance.reducer';
import { CurrencyType } from '../user-balance.models';

// Feature selector for the balance state
export const selectBalanceState = createFeatureSelector<UserBalanceState>('user-balance');

// Selector for all balances
export const selectAllBalances = createSelector(
  selectBalanceState,
  state => state?.balances ?? null
);

// Selectors for specific currency types
export const selectBronzeBalance = createSelector(
  selectAllBalances,
  balances => balances.find(b => b.id.currencyType === CurrencyType.VM_BRONZE)
);

export const selectSilverBalance = createSelector(
  selectAllBalances,
  balances => balances.find(b => b.id.currencyType === CurrencyType.VM_SILVER)
);

export const selectGoldBalance = createSelector(
  selectAllBalances,
  balances => balances.find(b => b.id.currencyType === CurrencyType.VM_GOLD)
);
