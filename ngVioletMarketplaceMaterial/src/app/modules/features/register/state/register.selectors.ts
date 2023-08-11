import { createFeatureSelector, createSelector } from "@ngrx/store";
import User from "src/app/models/user";
import { State } from "./register.reducer";

export const selectFeature = createFeatureSelector<State>('user');

export const selectUser = createSelector(
  selectFeature,
  (state: State) => state.user
);

export const selectError = createSelector(
  selectFeature,
  (state: State) => state.error
);
