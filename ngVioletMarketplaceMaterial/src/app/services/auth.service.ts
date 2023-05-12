import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import User from '../models/user';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User | null>;
  private baseUrl = environment.baseUrl;
  private url = this.baseUrl + 'api/user';


  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')!));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
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

  login(username: string, password: string): Observable<User> {
    // Create credentials
    const credentials = this.generateBasicAuthCredentials(username, password);
    // Send credentials as Authorization header (this is spring security convention for basic auth)
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Basic ${credentials}`,
        'X-Requested-With': 'XMLHttpRequest',
      }),
    };

    // Create request to authenticate credentials
    return this.http.get<User>(this.baseUrl + 'authenticate', httpOptions).pipe(
      tap((loggedIn: User) => {
        this.setUser(loggedIn);
      }),
      catchError((err: Error) => {
        return throwError(() => new Error('AuthService.login(): Error logging in: ' + err));
      })
    );
  }

  updateProfile(user: User): Observable<User> {
    const url = `${this.baseUrl}/users/${user.id}`;
    return this.http.put<User>(url, user, this.getHttpOptions()).pipe(
      tap((updatedUser: User) => {
        this.setUser(updatedUser);
      }),
      catchError((err: any) => {
        return throwError(() => 'AuthService.register(): error updating user: ' + err);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('credentials');
    localStorage.removeItem('username');
  }

  isUserLoggedIn(): boolean {
    if (localStorage.getItem('credentials')) {
      return true;
    }
    return false;
  }

  generateBasicAuthCredentials(username: string, password: string): string {
    return btoa(`${username}:${password}`);
  }

  getCredentials(): string | null {
    return localStorage.getItem('credentials');
  }

  getHttpOptions(): Object {
    let credentials = this.getCredentials();
    let options = {
      headers: {
        'Content-type': 'application/json',
        'X-Requestd-With': 'XMLHttpRequest',
        Authorization: `Basic ${credentials}`,
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



}
