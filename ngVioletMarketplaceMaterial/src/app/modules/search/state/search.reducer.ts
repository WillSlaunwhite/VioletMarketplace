import { createReducer, on } from "@ngrx/store";
import Token from "src/app/models/token";
import User from "src/app/models/user";
import { search, searchFailure, searchSuccess } from "./search.actions";

export interface SearchState {
  tokens: Token[];
  users: User[];
  loading: boolean;
  error: any;
};

export const initialState: SearchState = {
  tokens: [],
  users: [],
  loading: false,
  error: null
};

export const reducer = createReducer(
  initialState,
  on(search, (state) => ({
    ...state,
    loading: true,
  })),
  on(searchSuccess, (state, { results }) => {
    console.log('Incoming results:', results);
    const updatedState = {
      ...state,
      users: results.users,
      tokens: results.tokens,
      loading: false,
    };
    console.log('Updated state:', updatedState);
    return updatedState;
  }),
  on(searchFailure, (state, { err }) => ({ ...state, error: err, loading: false }))
);
