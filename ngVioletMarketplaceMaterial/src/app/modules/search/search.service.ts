import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from '../features/auth/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Observable, map, switchMap, tap } from 'rxjs';
import { SearchResults } from './search-results';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private baseUrl = environment.baseUrl;
  private url = this.baseUrl + 'api/search';

  constructor(private http: HttpClient, private auth: AuthService) { }

  search(query: string): Observable<SearchResults> {
    return this.auth.getHttpOptions().pipe(
      tap(options => console.log("HTTP Options: ", options)),
      switchMap(options => this.http.get<any>(`${this.url}/${query}`, options).pipe(
        tap(rawData => console.log('Raw data:', rawData)), // New line
        map(results => {
          let searchResults: SearchResults = {
            tokens: results.tokens || [],
            users: results.users || []
          };

          console.log("Search Results: ", JSON.stringify(searchResults));
          return searchResults;
        })
      ))
    );
  }
}
