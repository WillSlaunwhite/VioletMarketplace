import { createReducer, on } from '@ngrx/store';
import User from 'src/app/models/user';
import { login, loginSuccess, loginFailure, logout, logoutSuccess, logoutFailure } from './auth.actions';
import { BehaviorSubject } from 'rxjs';

export interface AuthState {
  user: User | null;
  error: any;
}

export const initialState: AuthState = {
  user: null,
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(login, state => ({ ...state })),
  on(loginSuccess, (state, { user }) => ({ ...state, user })),
  on(loginFailure, (state, { error }) => ({ ...state, error })),
  on(logout, state => ({ ...state })),
  on(logoutSuccess, state => ({ ...state, user: null })),
  on(logoutFailure, (state, { error }) => ({ ...state, error }))
);
