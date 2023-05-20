import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, of, switchMap, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import User from '../../../models/user';
import { UserService } from '../../shared/services/user.service';
import { Store } from '@ngrx/store';
import { login, loginSuccess, loginFailure, logout } from '../state/auth.actions';
import { selectCurrentUser } from '../state/auth.selectors';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public currentUser: Observable<User | null>;
  private baseUrl = environment.baseUrl;
  private url = this.baseUrl + 'api/user';

  constructor(private store: Store, private http: HttpClient, private userService: UserService) {
    this.currentUser = this.store.select(selectCurrentUser);
  }



  login(username: string, password: string): Observable<User> {
    // Send credentials as JSON
    const credentials = { username: username, password: password };
    // Create request to authenticate credentials
    return this.http.post<string>(this.baseUrl + 'authenticate', credentials).pipe(
      switchMap((jwt: string) => {
        this.store.dispatch(login(credentials));
        return this.userService.getUserByUsername(username);
      }),
      tap((user: User) => {
        this.store.dispatch(loginSuccess({ user }));
      }),
      catchError((err: Error) => {
        this.store.dispatch(loginFailure({ error: err }));
        return throwError(() => new Error('AuthService.login(): Error logging in'));
      })
    );
  }

  logout(): Observable<void> {
    return of(this.store.dispatch(logout()));
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


  getHttpOptions(): Object {
    // TODO Combine isValidToken and getHttpOptions
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


  getLoggedInUsername(): string | null {
    return localStorage.getItem('username');
  }

  getJwt(): string | null {
    return localStorage.getItem('jwt');
  }

}
