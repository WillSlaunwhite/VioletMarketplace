import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './user.reducer';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectCurrentUser = createSelector(
  selectAuthState,
  (authState: AuthState) => authState.user
);

export const selectCurrentUserId = createSelector(
  selectAuthState,
  (authState: AuthState) => authState.user?.id ?? null
);

export const isLoggedIn = createSelector(
  selectAuthState,
  (state: AuthState) => !!state.user
);

export const selectJwt = createSelector(
  selectAuthState,
  (state: AuthState) => state.jwt
);
