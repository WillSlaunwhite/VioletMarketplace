import { createReducer, on } from '@ngrx/store';
import { loadTokens, loadTokensSuccess, loadTokensFailure, loadUserTokensSuccess, loadUserTokensFailure, loadPopularTokensFailure, loadUserTokens, loadPopularTokens, loadPopularTokensSuccess } from './tokens.actions';
import Token from 'src/app/models/token';

export interface TokensState {
  allTokens: Token[];
  popularTokens: Token[],
  userTokens: Token[];
  error: any;
}

export const initialState: TokensState = {
  allTokens: [],
  popularTokens: [],
  userTokens: [],
  error: null
};

export const reducer = createReducer(
  initialState,
  on(loadTokens, state => ({ ...state })),
  on(loadUserTokens, state => ({ ...state })),
  on(loadPopularTokens, state => ({ ...state })),

  on(loadTokensSuccess, (state, { tokens }) => ({ ...state, allTokens: tokens })),
  on(loadPopularTokensSuccess, (state, { tokens }) => ({ ...state, popularTokens: tokens })),
  on(loadUserTokensSuccess, (state, { tokens }) => ({ ...state, userTokens: tokens })),

  on(loadTokensFailure, (state, { error }) => ({ ...state, error })),
  on(loadUserTokensFailure, (state, { error }) => ({ ...state, error })),
  on(loadPopularTokensFailure, (state, { error }) => ({ ...state, error }))
);
