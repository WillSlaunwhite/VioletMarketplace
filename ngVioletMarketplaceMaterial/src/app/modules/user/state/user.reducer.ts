import { createReducer, on } from '@ngrx/store';
import User from 'src/app/models/user';
import { login, loginSuccess, loginFailure, logout, logoutSuccess, logoutFailure, setJwt, removeJwt } from './user.actions';

export interface AuthState {
  user: User | null;
  error: any;
  jwt: string | null;
}

export const initialState: AuthState = {
  user: null,
  error: null,
  jwt: null,
};

export const reducer = createReducer(
  initialState,
  on(loginSuccess, (state, { user }) => { return { ...state, user } }),
  on(setJwt, (state, { jwt }) => { return { ...state, jwt } }),
  on(loginFailure, (state, { error }) => { return { ...state, error } }),
  on(logoutFailure, (state, { error }) => { return { ...state, error } }),
  on(logoutSuccess, state => { return { ...state, user: null, jwt: null } }),
  on(removeJwt, state => { return { ...state, jwt: null } })
);
