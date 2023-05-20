import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TokensState } from './tokens.reducer';
import Token from 'src/app/models/token';

export const selectTokensState = createFeatureSelector<TokensState>('token');

export const getAllTokens = createSelector(
  selectTokensState,
  (tokenState: TokensState) =>
    tokenState.allTokens.length ? tokenState.allTokens : null
);

export const getUserTokens = createSelector(
  selectTokensState,
  (tokenState: TokensState) => tokenState.userTokens
);
