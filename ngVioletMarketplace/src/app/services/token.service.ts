import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Token } from '../models/token';
@Injectable({
  providedIn: 'root'
})
export class TokenService {
  constructor(private http: HttpClient, ) { }
  private baseUrl = 'http://localhost:8090';
  private url = this.baseUrl + 'api/tokens';

  index(): Observable<Token[]> {
    return this.http.get<Token[]>(this.url).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('tokenService.index(): Error retrieving token list');
      })
    );
  }

  create(token: Token): Observable<Token> {
    token.offered = false;
    return this.http.post<Token>(this.url, token).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('tokenService.create(): error creating token');
      })
    );
  }
}
