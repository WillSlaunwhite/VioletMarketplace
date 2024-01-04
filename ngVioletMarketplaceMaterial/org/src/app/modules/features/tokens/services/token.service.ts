import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, mergeMap, Observable, switchMap, throwError } from 'rxjs';
import Token from '../../../../../app/models/token';
import { AuthService } from '../../auth/services/auth.service';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor(private http: HttpClient, private auth: AuthService) { }
  private baseUrl = environment.baseUrl;
  private url = this.baseUrl + 'api/tokens';

  index(): Observable<Token[]> {
    // TODO this method seems to be triggering twice on login
    return this.auth.getHttpOptions().pipe(
      mergeMap(options =>
        this.http.get<Token[]>(this.baseUrl + 'api/home/tokens', options).pipe(
          catchError((err: any) => {
            return throwError(() => new Error('TokenService.index(): error retrieving Token list.'))
          })
        )
      )
    );
  }

  getByUsername(username: string): Observable<Token[]> {
    return this.auth.getHttpOptions().pipe(
      switchMap(options =>
        this.http.get<Token[]>(this.baseUrl + 'api/tokens/user/' + username, options).pipe(
          catchError((err: any) => {
            return throwError(() => new Error('TokenService.getByUsername: error retrieving User\'s Token list.'));
          })
        )
      )
    );
  }

  getByPopular(): Observable<Token[]> {
    return this.auth.getHttpOptions().pipe(
      switchMap(options =>
        this.http.get<Token[]>(this.baseUrl + 'api/tokens/popular', options).pipe(
          catchError((err: any) => {
            return throwError(() => new Error('TokenService.getByPopular: error retrieving popular Token list.'));
          })
        )
      )
    );
  }


  createToken(token: Token) {
    return this.auth.getHttpOptions().pipe(
      switchMap(options =>
        this.http.post<Token>(this.baseUrl + 'api/tokens', token, options).pipe(
          catchError((err: any) => {
            return throwError(() => new Error('TokenService.createToken: error creating Token.'))
          })
        )
      )
    )
  }
}
