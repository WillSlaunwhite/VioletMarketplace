import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, catchError, mergeMap, switchMap, throwError } from 'rxjs';
import User from 'src/app/models/user';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = environment.baseUrl;
  private url = this.baseUrl + 'api/user';
  constructor(private auth: AuthService, private http: HttpClient, private store: Store) {
  }

  updateProfile(user: User): Observable<User> {
    const url = `${this.baseUrl}/users/${user.id}`;
    return this.auth.getHttpOptions().pipe(
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
    return this.auth.getHttpOptions().pipe(
      mergeMap(options =>
        this.http.get<User>(`${this.url}/${username}`, options).pipe(
          catchError((err: any) => {
            return throwError(() => new Error('UserService.getUserByUsername: error retrieving user.'));
          })
        )
      )
    );
  }

  register(user: User): Observable<User> {
    return this.auth.getHttpOptions().pipe(
      switchMap(options =>
        this.http.post<User>(this.baseUrl + 'register', user, options).pipe(
          catchError((err: any) => {
            return throwError(() => new Error('UserService.register: error registering user.'));
          })
        ))
    );
  }

}
