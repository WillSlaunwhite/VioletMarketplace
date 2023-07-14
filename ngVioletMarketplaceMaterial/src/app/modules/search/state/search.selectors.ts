import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SearchState } from "./search.reducer";

export const selectSearchState = createFeatureSelector<SearchState>('state');

export const selectSearchResults = createSelector(
  selectSearchState,
  (state: SearchState) => state.results
)
