import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Searchable } from './searchable';
import { Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private baseUrl = environment.baseUrl;
  private url = this.baseUrl + 'api/search';

  constructor(private http: HttpClient, private auth: AuthService) { }

  search(query: string): Observable<Searchable[]> {
    return this.auth.getHttpOptions().pipe(
      switchMap(options => this.http.get<Searchable[]>(`${this.url}/${query}`, options))
    );
  }
}
