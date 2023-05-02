import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import Token from '../models/token';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor(private http: HttpClient, private auth: AuthService) {}
  private baseUrl = environment.baseUrl;
  private url = this.baseUrl + 'api/tokens';

  index(): Observable<Token[]> {
    return this.http.get<Token[]>(this.baseUrl + 'api/home/tokens').pipe(
      catchError((err: any) => {
        return throwError(
          () => new Error('TokenService.index(): error retrieving Token list.')
        );
      })
    );
  }

  getByUsername(username: string): Observable<Token[]> {
    return this.http
      .get<Token[]>(this.baseUrl + 'api/tokens/user/' + username)
      .pipe(
        catchError((err: any) => {
          return throwError(
            () =>
              new Error(
                'TokenService.getByUsername: error retrieving Token list.'
              )
          );
        })
      );
  }

  createToken(token: Token) {
    return this.http.post<Token>(this.baseUrl + 'api/tokens', token, this.auth.getHttpOptions()).pipe(
      catchError((err: any) => {
        return throwError(
          () => new Error('TokenService.createToken: error creating Token.')
        );
      })
    )
  }
}
