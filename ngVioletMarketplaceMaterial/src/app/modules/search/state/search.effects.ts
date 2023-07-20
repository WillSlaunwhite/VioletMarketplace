import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { SearchService } from "../search.service";
import { search, searchFailure, searchSuccess } from "./search.actions";

@Injectable()
export class SearchEffects {
  constructor(private actions$: Actions, private searchService: SearchService) { }

  search$ = createEffect(() => this.actions$.pipe(
    ofType(search),
    mergeMap(({ query }) => {
      return this.searchService.search(query).pipe(
        tap(results => {
          console.log('Search results:', results)
          console.log('Dispatching searchSuccess action with users:', results.users, ' and tokens:', results.tokens);
        }),
        map(results => searchSuccess({ results })),
        catchError(err => of(searchFailure({ err })))
      )
    })
  ));
}
