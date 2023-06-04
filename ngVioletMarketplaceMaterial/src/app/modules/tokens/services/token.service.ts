import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, mergeMap, Observable, switchMap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import Token from 'src/app/models/token';
import { AuthService } from '../../auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor(private http: HttpClient, private auth: AuthService) { }
  private baseUrl = environment.baseUrl;
  private url = this.baseUrl + 'api/tokens';

  index(): Observable<Token[]> {
    // TODO this method seems to be triggering twice on login
    console.log('HERE2');
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
    console.log('HERE');

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
