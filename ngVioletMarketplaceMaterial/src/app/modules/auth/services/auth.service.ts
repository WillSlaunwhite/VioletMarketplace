import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import User from '../../../models/user';
import { logout, setJwt } from '../../user/state/user.actions';
import { selectCurrentUser, selectJwt } from '../../user/state/user.selectors';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public currentUser: Observable<User | null>;
  private baseUrl = environment.baseUrl;
  private url = this.baseUrl + 'api/user';

  constructor(private store: Store, private http: HttpClient) {
    this.currentUser = this.store.select(selectCurrentUser);
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
          headers['Authorization'] = `Bearer ${jwt}`;
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
}
