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
