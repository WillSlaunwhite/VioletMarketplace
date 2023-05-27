import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.reducer';
import User from 'src/app/models/user';
import { BehaviorSubject } from 'rxjs';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectCurrentUser = createSelector(
  selectAuthState,
  (authState: AuthState) =>
    authState.user
);

export const isLoggedIn = createSelector(
  selectAuthState,
  (state: AuthState) => !!state.user
);
