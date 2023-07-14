import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { registerUser, registerUserFailure, registerUserSuccess } from "./register.actions";
import { UserService } from "../../user/services/user.service";

@Injectable()
export class UserEffects {
  registerUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerUser),
      mergeMap(action => this.userService.register(action.user).pipe(
        map(user => registerUserSuccess({ user })),
        catchError(error => of(registerUserFailure({ error })))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private userService: UserService,
  ) { }
}
