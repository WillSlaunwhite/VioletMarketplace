import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bid } from 'src/app/models/bid';
import { Token } from 'src/app/models/token';
import { Tokentx } from 'src/app/models/tokentx';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css'],
})
export class TokenComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tokenService: TokenService,
    private transactionService: TransactionService,
    private auth: AuthService
  ) {}
  newToken: Token = new Token();
  tokens: Token[] = [];
  selected: Token | null = null;
  editToken: Token | null = null;
  tokenTransactions: Tokentx[] = [];
  bids: Bid[] = [];

  createToken(token: Token) {
    this.tokenService.create(token).subscribe(
      (newToken) => {
        this.getAllTokens();
        this.newToken = new Token();
      },
      (failed) => {
        console.error('TokenComponent.createToken(): Error creating Token');
        console.error(failed);
      }
    );
  }

  deleteToken(id: number): void {
    this.tokenService.destroy(id).subscribe(
      (success) => {
        this.getAllTokens();
      },
      (failure) => {
        console.error('tokenComponent.deleteToken(): error deleting Token');
        console.error(failure);
      }
    );
  }

  // updateToken
  // method already exists in service, needs to be built out here

  getAllTokens(): void {
    this.tokenService.index().subscribe(
      (tokenList) => {
        this.tokens = tokenList;
      },
      (fail) => {
        console.error(
          'TokenComponent.reloadTokens(): Error getting Token List'
        );
        console.log(fail);
      }
    );
  }

  getAllTransfers() {
    this.transactionService.getAllTransfers().subscribe(
      (tokentxList) => {
        console.log(this.tokenTransactions.length);

        this.tokenTransactions = tokentxList;

        console.log(this.tokenTransactions.length);
      },
      (fail) => {
        console.error(
          'tokenComponent.getAllTransfers(): error getting transfers'
        );
        console.error(fail);
      }
    );
  }

  getMyBids() {
    this.transactionService.getAllBids().subscribe(
      (bidsList) => {
        console.log(this.bids.length);

        this.bids = bidsList;

        console.log(this.bids.length);
      },
      (fail) => {
        console.error(
          'tokenComponent.getAllTransfers(): error getting transfers'
        );
        console.error(fail);
      }
    );
  }

  ngOnInit(): void {
    if (!this.selected && this.route.snapshot.paramMap.get('id')) {
      this.tokenService.show(this.route.snapshot.params['id']).subscribe(
        (success) => {
          this.selected = success;
          console.log('succeeded getting token, attempting to get transfers.');

          this.getAllTransfers();

          console.log(
            'succeeded getting transfers, attempting to get all bids'
          );

          this.getMyBids();

          console.log('successfully retrieved all bids');
        },
        (fail) => {
          console.error(
            'tokenComponent.ngOnInit(): error initializing Token by id'
          );
          console.error('routing to index');

          this.tokenService.index();

          console.error('Succeeded routing to index, getting transfers');

          this.getAllTransfers();
          console.log(this.tokenTransactions.length);

          console.error('succeded getting transfers');

          console.error(fail);
        }
      );
    } else {
      this.getAllTokens();
    }
  }

  setEditToken() {
    this.editToken = Object.assign({}, this.selected);
  }

  displayToken(token: Token) {
    this.selected = token;
  }

  hideToken() {
    this.selected = null;
  }

  loggedIn() {
    return this.auth.isUserLoggedIn();
  }
}
