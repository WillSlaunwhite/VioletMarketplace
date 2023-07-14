import { Observable } from "rxjs"
import { SearchEffects } from "./search.effects";
import { SearchService } from "../search.service";
import { TestBed } from "@angular/core/testing";
import { search, searchSuccess } from "./search.actions";
import { Searchable } from "../searchable";
import { cold, hot } from "jasmine-marbles";
import { provideMockActions } from '@ngrx/effects/testing';
import { error } from "@angular/compiler/src/util";

describe('SearchEffects', () => {
  let actions$: Observable<any>;
  let effects: SearchEffects;
  let searchService: jasmine.SpyObj<SearchService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SearchEffects,
        provideMockActions(() => actions$),
        { provide: SearchService, useValue: jasmine.createSpyObj('SearchService', ['search']) }
      ],
    });
    effects = TestBed.inject(SearchEffects);
    searchService = TestBed.inject(SearchService) as jasmine.SpyObj<SearchService>;
  });

  describe('search$', () => {
    it('should return a SEARCH_SUCCESS action with the results on success', () => {
      const results: Searchable[] = [];
      const action = search({ query: 'query' });
      const completion = searchSuccess({ results })

      actions$ = hot('-a', { a: action })
      const response = cold('-#', {}, error);
      const expected = cold('--c', { c: completion });

      searchService.search.and.returnValue(response);

      expect(effects.search$).toBeObservable(expected);
    });
  });
});
