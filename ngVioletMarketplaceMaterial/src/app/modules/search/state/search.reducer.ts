import { createReducer, on } from "@ngrx/store";
import { Searchable } from "../searchable";
import { searchFailure, searchSuccess } from "./search.actions";

export interface SearchState {
  results: Searchable[];
  error: any;
};

export const initialState: SearchState = {
  results: [],
  error: null
};

export const reducer = createReducer(
  initialState,
  on(searchSuccess, (state, { results }) => { return { ...state, results: results } }),
  on(searchFailure, (state, { err }) => { return { ...state, error: err } })
);