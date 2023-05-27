import { createReducer, on } from '@ngrx/store';
import User from 'src/app/models/user';
import { login, loginSuccess, loginFailure, logout, logoutSuccess, logoutFailure } from './auth.actions';

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
  on(loginSuccess, (state, { user }) => { return { ...state, user } }),
  on(loginFailure, (state, { error }) => { return { ...state, error } }),
  on(logoutSuccess, state => { return { ...state, user: null } }),
  on(logoutFailure, (state, { error }) => { return { ...state, error } })
);
