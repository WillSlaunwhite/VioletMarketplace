import { createAction, props } from "@ngrx/store";
import { Searchable } from "../searchable";

export const search = createAction(
  '[Search] Action',
  props<{ query: string }>()
);

export const searchSuccess = createAction(
  '[Search] Action Success',
  props<{ results: Searchable[] }>()
);

export const searchFailure = createAction(
  '[Search] Action Failure',
  props<{ err: any }>()
);
