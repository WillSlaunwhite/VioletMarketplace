import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TokensState } from './tokens.reducer';

export const selectTokensState = createFeatureSelector<TokensState>('token');

export const getAllTokens = createSelector(
  selectTokensState,
  (tokenState: TokensState) =>
    tokenState.allTokens.length > 0 ? tokenState.allTokens : null
);

export const getUserTokens = createSelector(
  selectTokensState,
  (tokenState: TokensState) => tokenState.userTokens.length > 0 ? tokenState.userTokens : null
);

export const getPopularTokens = createSelector(
  selectTokensState,
  (tokenState: TokensState) => tokenState.popularTokens.length > 0 ? tokenState.popularTokens : null
);
