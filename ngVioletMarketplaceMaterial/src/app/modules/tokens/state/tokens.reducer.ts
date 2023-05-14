import { createReducer, on } from '@ngrx/store';
import { loadTokens, loadTokensSuccess, loadTokensFailure } from './tokens.actions';
import Token from 'src/app/models/token';

export interface State {
  tokens: Token[];
  error: any;
}

export const initialState: State = {
  tokens: [],
  error: null
};

export const reducer = createReducer(
  initialState,
  on(loadTokens, state => ({ ...state })),
  on(loadTokensSuccess, (state, { tokens }) => ({ ...state, tokens })),
  on(loadTokensFailure, (state, { error }) => ({ ...state, error }))
);
