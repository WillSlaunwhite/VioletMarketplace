import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import User from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = environment.baseUrl;
  private url = this.baseUrl + 'api/user';
  constructor(private http: HttpClient) {
  }

  updateProfile(user: User): Observable<User> {
    const url = `${this.baseUrl}/users/${user.id}`;
    return this.http.put<User>(url, user, this.getHttpOptions()).pipe(
      catchError((err: any) => {
        return throwError(() => 'AuthService.register(): error updating user: ' + err);
      })
    );
  }

  getUserByUsername(username: string): Observable<User> {
    return this.http.get<User>(`${this.url}/${username}`, this.getHttpOptions()).pipe(
      catchError((err: Error) => {
        console.error(err);
        return throwError(() => 'tokenService.getUser(): Error retreiving user');
      })
    );
  }

  register(user: User) {
    // create request to register a new account
    return this.http.post(this.baseUrl + 'register', user, this.getHttpOptions()).pipe(
      catchError((err: Error) => {
        console.log(err);
        return throwError(
          () => 'AuthService.register(): error registering user.'
        );
      })
    );
  }


  getValidJwt(): string | null {
    // Check the token is present and not expired
    // Note: This is a simplified check, in reality you'd
    // also want to check the token hasn't been tampered with, among other things.
    return localStorage.getItem('jwt') ? localStorage.getItem('jwt') : null;
  }

  getHttpOptions(): Object {
    let jwt = this.getValidJwt();
    if (jwt) {
      let options = {
        headers: {
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
          'Authorization': `Bearer ${jwt}`,
        },
      };
      return options;
    } else {
      // return some default options or throw an error if a valid JWT is required
      return {
        headers: {
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
        },
      };
    }
  }
}
