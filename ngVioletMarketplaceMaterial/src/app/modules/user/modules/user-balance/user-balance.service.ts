import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, switchMap, throwError } from 'rxjs';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserBalanceService {
  constructor(private http: HttpClient, private auth: AuthService) { }
  private baseUrl = environment.baseUrl;
  private url = this.baseUrl + 'api/user-balance';

  getBalance(userId: number, currencyType: string): Observable<number> {
    return this.auth.getHttpOptions().pipe(
      switchMap(options =>
        this.http.get<number>(`${this.url}/${userId}/balance/${currencyType}` , options).pipe(
          catchError((err: any) => {
            return throwError(() => new Error('UserBalanceService.getBalance: error retrieving User\'s balance of ' + currencyType));
          })
        )
      )
    );
  }

  credit(userId: number, currencyType: string, amount: number): Observable<void> {
    const body = { userId, currencyType, amount };
    return this.auth.getHttpOptions().pipe(
      switchMap(options =>
        this.http.post<void>(`${this.url}/credit`, body, options).pipe(
          catchError((err: any) => {
            return throwError(() => new Error('UserBalanceService.credit: error crediting User\'s balance of ' + currencyType));
          })
        )
      )
    );
  }
  
  debit(userId: number, currencyType: string, amount: number): Observable<void> {
    const body = { userId, currencyType, amount };
    return this.auth.getHttpOptions().pipe(
      switchMap(options =>
        this.http.post<void>(`${this.url}/debit`, body, options).pipe(
          catchError((err: any) => {
            return throwError(() => new Error('UserBalanceService.debit: error debiting User\'s balance of ' + currencyType));
          })
        )
      )
    );
  }
  
  getAllBalances(userId: number): Observable<number[]> {
    return this.auth.getHttpOptions().pipe(
      switchMap(options =>
        this.http.get<number[]>(`${this.url}/${userId}/balance`, options).pipe(
          catchError((err: any) => {
            return throwError(() => new Error('UserBalanceService.getAllBalances: error retrieving all User balances'));
          })
        )
      )
    );
  }
  
 
}
