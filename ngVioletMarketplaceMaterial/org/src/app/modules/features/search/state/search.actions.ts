import { createAction, props } from "@ngrx/store";
import Token from "src/app/models/token";
import User from "src/app/models/user";

export const search = createAction(
  '[Search] Action',
  props<{ query: string }>()
);

export const searchSuccess = createAction(
  '[Search] Action Success',
  props<{ results: { users: User[], tokens: Token[] } }>()
);

export const searchFailure = createAction(
  '[Search] Action Failure',
  props<{ err: any }>()
);
