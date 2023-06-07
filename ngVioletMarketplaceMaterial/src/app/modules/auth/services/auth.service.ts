import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, mergeMap, Observable, of, switchMap, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import User from '../../../models/user';
import { UserService } from '../../shared/services/user.service';
import { Store } from '@ngrx/store';
import { login, loginSuccess, loginFailure, logout, setJwt } from '../state/auth.actions';
import { selectCurrentUser, selectJwt } from '../state/auth.selectors';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public currentUser: Observable<User | null>;
  private baseUrl = environment.baseUrl;
  private url = this.baseUrl + 'api/user';

  constructor(private store: Store, private http: HttpClient, private userService: UserService) {
    console.log('auth service constructor');
    this.currentUser = this.store.select(selectCurrentUser);
  }

  login(username: string, password: string): Observable<{ user: User, jwt: string }> {
    console.log('AuthService: login method called');
    const credentials = { username: username, password: password };
    let headers: { [key: string]: string } = {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
    };
    let options = { headers };
    return this.http.post<string>(this.baseUrl + 'authenticate', credentials, options).pipe(
      tap((jwt: string) => {
        this.store.dispatch(setJwt({ jwt }));
      }),
      switchMap((jwt: string) => {
        return this.userService.getUserByUsername(username).pipe(
          map(user => ({ user, jwt }))
        );
      })
    )
  }

  logout(): Observable<void> {
    this.store.dispatch(logout());
    return of(undefined);
  }

  isUserLoggedIn(): boolean {
    if (localStorage.getItem('jwt')) {
      return true;
    }
    return false;
  }


  getValidJwt(): string | null {
    // Check the token is present and not expired
    // Note: This is a simplified check, in reality you'd
    // also want to check the token hasn't been tampered with, among other things.
    return localStorage.getItem('jwt') ? localStorage.getItem('jwt') : null;
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

  getLoggedInUsername(): string | null {
    return localStorage.getItem('username');
  }

  getJwt(): string | null {
    return localStorage.getItem('jwt');
  }

}
