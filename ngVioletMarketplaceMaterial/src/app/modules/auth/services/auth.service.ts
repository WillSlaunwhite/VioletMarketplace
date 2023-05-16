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
  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser: Observable<User | null>;
  private baseUrl = environment.baseUrl;
  private url = this.baseUrl + 'api/user';
  public user$: Observable<User | null>;

  constructor(private store: Store, private http: HttpClient, private userService: UserService) {
    this.currentUserSubject = new BehaviorSubject<User | null>(JSON.parse(localStorage.getItem('currentUser')!));
    this.currentUser = this.currentUserSubject.asObservable();
    this.user$ = this.store.select(selectCurrentUser);
  }

  public get currentUserValue(): User | null {
    return this.currentUserSubject.value;
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

  getCredentials(): string | null {
    return localStorage.getItem('credentials');
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


  getLoggedInUsername(): string | null {
    return localStorage.getItem('username');
  }

  setUser(user: User) {
    this.currentUserSubject.next(user);
  }

  storeJwt(jwt: string) {
    localStorage.setItem('jwt', jwt);
  }

  getJwt(): string | null {
    return localStorage.getItem('jwt');
  }

}
