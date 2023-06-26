import { createAction, props } from "@ngrx/store";
import User from "src/app/models/user";

export const registerUser = createAction(
  '[User] Register',
  props<{ user: User }>()
);

export const registerUserSuccess = createAction(
  '[User] Register Success',
  props<{ user: User }>()
);

export const registerUserFailure = createAction(
  '[User] Register Failure',
  props<{ error: any }>()
);
