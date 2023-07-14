import { createAction, props } from "@ngrx/store";
import { Searchable } from "../searchable";

export const search = createAction(
  '[Search] Action',
  props<{ query: string }>()
);

export const searchSuccess = createAction(
  '[Search] Search Success',
  props<{ results: Searchable[] }>()
)

export const searchFailure = createAction(
  '[Search] Search Failure',
  props<{ err: any }>()
)
