import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map, mergeMap, of, switchMap, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import User from '../../../models/user';
import { login, loginSuccess, loginFailure, logout, setJwt } from '../state/user.actions';
import { selectCurrentUser, selectJwt } from '../state/user.selectors';
import { AuthService } from '../../auth/services/auth.service';
import { Store } from '@ngrx/store';

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

  login(username: string, password: string): Observable<string> {
    console.log('auth service login');
    const credentials = { username: username, password: password };
    let headers: { [key: string]: string } = {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
    };
    let options = { headers };
    return this.http.post<string>(this.baseUrl + 'authenticate', credentials, options).pipe(
      tap((jwt: string) => {
        this.store.dispatch(setJwt({ jwt }));
      })
    )
  }


  logout(): Observable<void> {
    // * I changed this to be a one line,
    // todo test and make sure it works properly
    return of(this.store.dispatch(logout()));
  }

  isUserLoggedIn(): boolean {
    return localStorage.getItem('jwt') ? true : false;
  }

  getUserByUsername(username: string): Observable<User> {
    console.log('UserService: getUserByUsername method called');
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

  register(user: User): Observable<User> {
    console.log('UserService: register method called');
    return this.getHttpOptions().pipe(
      switchMap(options =>
        this.http.post<User>(this.baseUrl + 'register', user, options).pipe(
          catchError((err: any) => {
            return throwError(() => new Error('UserService.register: error registering user.'));
          })
        ))
    );
  }

  getHttpOptions(): Observable<Object> {
    console.log('in http options');
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
