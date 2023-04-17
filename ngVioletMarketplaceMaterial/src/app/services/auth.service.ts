import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import User from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  private baseUrl = environment.baseUrl;
  private url = this.baseUrl + 'api/user';

  getUser(username: string): Observable<User> {
    return this.http.get<User>(`${this.url}/${username}`).pipe(
      catchError((err: any) => {
        console.error(err);
        return throwError('tokenService.getUser(): Error retreiving user');
      })
    );
  }

  getHttpOptions() {
    let credentials = this.getCredentials();
    let options = {
      headers: {
        'Content-type': 'application/json',
        'X-Requestd-With': 'XMLHttpRequest',
        Authorization: `Basic ${credentials}`,
      },
    };
    return options;
  }

  register(user: User) {
    // create request to register a new account
    return this.http.post(this.baseUrl + 'register', user).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => 'AuthService.register(): error registering user.'
        );
      })
    );
  }

  login(username: string, password: string) {
    // Create credentials
    const credentials = this.generateBasicAuthCredentials(username, password);
    // Send credentials as Authorization header (this is spring security convention for basic auth)
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Basic ${credentials}`,
        'X-Requested-With': 'XMLHttpRequest',
      }),
    };

    // Create request to authenticate credentials
    return this.http.get(this.baseUrl + 'authenticate', httpOptions).pipe(
      tap((res) => {
        localStorage.setItem('credentials', credentials);
        localStorage.setItem('username', username);
      }),
      catchError((err: any) => {
        console.error(err);
        return throwError(
          () => new Error('AuthService.login(): Error logging in.')
        );
      })
    );
  }

  logout() {
    localStorage.removeItem('credentials');
    localStorage.removeItem('username');
  }

  isUserLoggedIn() {
    if (localStorage.getItem('credentials')) {
      return true;
    }
    return false;
  }

  generateBasicAuthCredentials(username: string, password: string) {
    return btoa(`${username}:${password}`);
  }

  getCredentials() {
    return localStorage.getItem('credentials');
  }

  getUsername() {
    return localStorage.getItem('username');
  }
}
