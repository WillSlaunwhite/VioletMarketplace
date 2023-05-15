import { createAction, props } from '@ngrx/store';
import User from 'src/app/models/user';

export const login = createAction(
  '[Auth] Login',
  props<{ username: string, password: string }>()
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ user: User }>()
);

export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: any }>()
);

export const logout = createAction(
  '[Auth] Logout'
);

export const logoutSuccess = createAction(
  '[Auth] Logout Success'
);

export const logoutFailure = createAction(
  '[Auth] Logout Failure',
  props<{ error: any }>()
);
