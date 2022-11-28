import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Bid } from '../models/bid';
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
  private url = this.baseUrl + 'api/';
  tokens: Token[] = [];
  transfers: Tokentx[] = [];


// what I'm thinking is, when you load the token page that has the list of bids
// onInit it will load the list of bids for each token and will also load a list of
// that token's transaction history

// you click the buy, we submit to purchase, you click on the make bid, it's tied to a
// click event that that calls the createBid() method on that page. That launches a form
// that will allow you to fill in the required information to create a new bid. The bid should
// be able to infer the buyer and seller information on the page.

// this way, when a user navigates to a token's page, we can have it set so when they click on
// the bids for it, they can see the pending bids yet to be accepted or denied, and on the other side,
// if you've submitted a bid for a bet when you navigate to the page it'll show the status of your bet.
// you'll also be able to see a concise list of these on the user's page.

// logic to create and update bids and transactions

create(bid: Bid): Observable<Bid> {
  bid.accepted = false;
  return this.http.post<Bid>(this.url, bid, this.auth.getHttpOptions()).pipe(
    catchError((err: any) => {
      console.log(err);
      return throwError('transactionService.create(): Error creating bid');
    })
  );
}





// logic to set users and tokens and transactions










  // search for transfers by buyer seller and then all user transactions

  getAllTransfers(): Observable<Tokentx[]> {
    return this.http.get<Tokentx[]>(this.url + 'transfers/1', this.auth.getHttpOptions()).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('transactionService.getAllTransfers(): Error retrieving Token Transaction list');
      })
    );
  }

  getBuyerTransfers(): Observable<Tokentx[]> {
    return this.http.get<Tokentx[]>(this.url).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('transactionService.getBuyerTransfers(): Error retrieving Token Transaction list');
      })
    );
  }

  getSellerTransfers(): Observable<Tokentx[]> {
    return this.http.get<Tokentx[]>(this.url).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('transactionService.getSellerTransfers(): Error retrieving Token Transaction list');
      })
    );
  }

  getAllUserTransfers(): Observable<Tokentx[]> {
    return this.http.get<Tokentx[]>(this.url).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('transactionService.getAllUserTransfers(): Error retrieving Token Transaction list');
      })
    );
  }


  getAllBids(): Observable<Bid[]> {
    return this.http.get<Bid[]>(this.url + 'bids/1').pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('transactionService.getAllBids(): Error retrieving Bid list');
      })
    );
  }

}
