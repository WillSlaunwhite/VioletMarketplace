import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map, mergeMap, switchMap, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import User from 'src/app/models/user';
import { AuthService } from '../../auth/services/auth.service';
import { Store } from '@ngrx/store';
import { selectJwt } from '../../auth/state/auth.selectors';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = environment.baseUrl;
  private url = this.baseUrl + 'api/user';
  constructor(private http: HttpClient, private store: Store) {
  }

  updateProfile(user: User): Observable<User> {
    const url = `${this.baseUrl}/users/${user.id}`;
    return this.getHttpOptions().pipe(
      switchMap(options =>
        this.http.put<User>(url, user, options).pipe(
          catchError((err: any) => {
            return throwError(() => new Error('UserService.updateProfile: error updating profile.'));
          })
        )
      )
    );
  }

  getUserByUsername(username: string): Observable<User> {
    return this.getHttpOptions().pipe(
      mergeMap(options =>
        this.http.get<User>(`${this.url}/${username}`, options).pipe(
          catchError((err: any) => {
            return throwError(() => new Error('UserService.getUserByUsername: error retrieving user.'));
          })
        )
      )
    );
  }

  register(user: User) {
    return this.getHttpOptions().pipe(
      switchMap(options =>
        this.http.post(`${this.baseUrl} + 'register'`, user, options).pipe(
          catchError((err: any) => {
            return throwError(() => new Error('UserService.register: error registering user.'));
          })
        ))
    );
  }

  getHttpOptions(): Observable<Object> {
    return this.store.select(selectJwt).pipe(
      map(jwt => {
        let headers: { [key: string]: string } = {
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',

        };

        if (jwt) {
          headers['Authorization'] = 'Bearer ${jwt}';
        }
        let options = { headers };
        return options;
      }),
    );

  }

}
