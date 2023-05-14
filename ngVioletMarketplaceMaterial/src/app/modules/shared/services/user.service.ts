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
    return this.http.get<User>(`${this.url}/${username}`).pipe(
      catchError((err: Error) => {
        console.error(err);
        return throwError(() => 'tokenService.getUser(): Error retreiving user');
      })
    );
  }

  register(user: User) {
    // create request to register a new account
    return this.http.post(this.baseUrl + 'register', user).pipe(
      catchError((err: Error) => {
        console.log(err);
        return throwError(
          () => 'AuthService.register(): error registering user.'
        );
      })
    );
  }



  getJwt(): string | null {
    return localStorage.getItem('jwt');
  }

  getHttpOptions(): Object {
    let jwt = this.getJwt();
    let options = {
      headers: {
        'Content-type': 'application/json',
        'X-Requestd-With': 'XMLHttpRequest',
        Authorization: `Bearer ${jwt}`,
      },
    };
    return options;
  }
}
