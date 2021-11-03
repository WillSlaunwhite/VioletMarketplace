import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Token } from '../models/token';
import { Tokentx } from '../models/tokentx';
import { AuthService } from './auth.service';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  constructor(
    private http: HttpClient,
    private auth: AuthService,
    private tokenSvc: TokenService
  ) {}
  private baseUrl = 'http://localhost:8090/';
  private url = this.baseUrl + 'api/transfers';
  tokens: Token[] = [];
  transfers: Tokentx[] = [];
  bids: any;    // needs to be bid model



  // search for transfers by buyer seller and then all user transactions

  getAllTransfers(): Observable<Tokentx[]> {
    return this.http.get<Tokentx[]>(this.url + '/1', this.auth.getHttpOptions()).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('tokenService.index(): Error retrieving Token list');
      })
    );
  }

  getBuyerTransfers(): Observable<Tokentx[]> {
    return this.http.get<Tokentx[]>(this.url).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('tokenService.index(): Error retrieving Token list');
      })
    );
  }

  getSellerTransfers(): Observable<Tokentx[]> {
    return this.http.get<Tokentx[]>(this.url).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('tokenService.index(): Error retrieving Token list');
      })
    );
  }

  getAllUserTransfers(): Observable<Tokentx[]> {
    return this.http.get<Tokentx[]>(this.url).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('tokenService.index(): Error retrieving Token list');
      })
    );
  }

}
