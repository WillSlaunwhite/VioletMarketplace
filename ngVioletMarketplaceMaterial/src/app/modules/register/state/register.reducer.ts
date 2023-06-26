import { createReducer, on } from "@ngrx/store";
import User from "src/app/models/user";
import { registerUser, registerUserSuccess, registerUserFailure } from "./register.actions";

export interface State {
  user: User | null;
  error: string | null;
};

export const initialState: State = {
  user: null,
  error: null
};

export const reducer = createReducer(
  initialState,
  on(registerUser, state => state),
  on(registerUserSuccess, (state, { user }) => ({ ...state, user })),
  on(registerUserFailure, (state, { error }) => ({ ...state, error }))
);
