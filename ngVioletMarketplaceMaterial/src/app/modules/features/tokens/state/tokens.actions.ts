import { createAction, props } from '@ngrx/store';
import Token from 'src/app/models/token';

export const loadTokens = createAction(
  '[Token] Load Tokens'
);

export const loadTokensSuccess = createAction(
  '[Token] Load Tokens Success',
  props<{ tokens: Token[] }>()
);

export const loadTokensFailure = createAction(
  '[Token] Load Tokens Failure',
  props<{ error: any }>()
);


export const loadUserTokens = createAction(
  '[Token] Load User Tokens',
  props<{ username: string }>()
);

export const loadUserTokensSuccess = createAction(
  '[Token] Load User Tokens Success',
  props<{ tokens: Token[] }>()
);

export const loadUserTokensFailure = createAction(
  '[Token] Load User Tokens Failure',
  props<{ error: any }>()
);


export const loadPopularTokens = createAction(
  '[Token] Load Popular Tokens'
);

export const loadPopularTokensSuccess = createAction(
  '[Token] Load Popular Tokens Success',
  props<{ tokens: Token[] }>()
);

export const loadPopularTokensFailure = createAction(
  '[Token] Load Popular Tokens Failure',
  props<{ error: any }>()
);
