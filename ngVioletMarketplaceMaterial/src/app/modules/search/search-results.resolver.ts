import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable, filter, take } from "rxjs";
import { search } from "./state/search.actions";
import { isSearchResultsLoaded } from "./state/search.selectors";

@Injectable({ providedIn: 'root' })
export class SearchResultsResolver implements Resolve<boolean> {
  constructor(private store: Store) { }

  resolve(route: ActivatedRouteSnapshot): Observable<boolean> {
    const query = route.queryParamMap.get('query');
    console.log(query);

    if (!query) {
      throw new Error('Query parameter is missing');
    }

    this.store.dispatch(search({ query }));

    return this.store.select(isSearchResultsLoaded)
      .pipe(filter(loaded => loaded), take(1));
  }
}
