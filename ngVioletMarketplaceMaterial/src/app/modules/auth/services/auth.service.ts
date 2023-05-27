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
    const credentials = { username: username, password: password };
    return this.http.post<string>(this.baseUrl + 'authenticate', credentials, this.getHttpOptions()).pipe(
      switchMap((jwt: string) => {
        return this.userService.getUserByUsername(username);
      })
    );
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

  getLoggedInUsername(): string | null {
    return localStorage.getItem('username');
  }

  getJwt(): string | null {
    return localStorage.getItem('jwt');
  }

}
