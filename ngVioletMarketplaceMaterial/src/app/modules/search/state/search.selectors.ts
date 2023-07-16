import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SearchState } from "./search.reducer";

export const selectSearchState = createFeatureSelector<SearchState>('search');

export const selectSearchResults = createSelector(
  selectSearchState,
  (state: SearchState) =>
    state.results.length > 0 ? state.results : null

)
