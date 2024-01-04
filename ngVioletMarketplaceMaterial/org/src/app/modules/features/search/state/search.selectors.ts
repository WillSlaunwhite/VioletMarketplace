import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SearchState } from "./search.reducer";

export const selectSearchState = createFeatureSelector<SearchState>('search');

export const selectUsers = createSelector(
  selectSearchState,
  (state: SearchState) =>
    state.users
);


export const selectTokens = createSelector(
  selectSearchState,
  (state: SearchState) =>
    state.tokens
);

export const isSearchResultsLoaded = createSelector(
  selectSearchState,
  (state: SearchState) => !state.loading
);

