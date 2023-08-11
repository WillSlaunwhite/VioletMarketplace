import { createReducer, on } from '@ngrx/store';
import { loadTokens, loadTokensSuccess, loadTokensFailure, loadUserTokensSuccess } from './tokens.actions';
import Token from 'src/app/models/token';

export interface TokensState {
  allTokens: Token[];
  userTokens: Token[];
  error: any;
}

export const initialState: TokensState = {
  allTokens: [],
  userTokens: [],
  error: null
};

export const reducer = createReducer(
  initialState,
  on(loadTokens, state => ({ ...state })),
  on(loadTokensSuccess, (state, { tokens }) => ({ ...state, allTokens: tokens })),
  on(loadUserTokensSuccess, (state, { tokens }) => ({ ...state, userTokens: tokens })),
  on(loadTokensFailure, (state, { error }) => ({ ...state, error }))
);
