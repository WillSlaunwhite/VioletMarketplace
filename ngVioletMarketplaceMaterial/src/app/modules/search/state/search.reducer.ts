import { createReducer, on } from "@ngrx/store";
import { Searchable } from "../searchable";
import { searchFailure, searchSuccess } from "./search.actions";

export interface State {
  data: Searchable[] | null;
  error: any;
};

export const initialState: State = {
  data: null,
  error: null
};

export const reducer = createReducer(
  initialState,
  on(searchSuccess, (state, { results }) => { return { ...state, results } }),
  on(searchFailure, (state, { err }) => { return { ...state, error: err } })
);
