import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  ) { }
  newToken: Token = new Token();
  tokens: Token[] = [];
  selected: Token | null = null;
  editToken: Token | null = null;
  tokenTransactions: Tokentx[] = [];




  addToken(token: Token) {
    this.tokenService.create(token).subscribe(
      (newToken) => {
        this.reloadTokens();
        this.newToken = new Token();
      },
      (failed) => {
        console.error('TokenComponent.addToken(): Error creating Token');
        console.error(failed);
      }
    );
  }

  reloadTokens(): void {
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

  deleteToken(id: number): void {
    this.tokenService.destroy(id).subscribe(
      (success) => {
        this.reloadTokens();
      },
      (failure) => {
        console.error('tokenComponent.deleteToken(): error deleting Token');
        console.error(failure);
      }
    );
  }

  getAllTransfers() {
    this.transactionService.getAllTransfers().subscribe(
      tokentxList => {
        console.log(this.tokenTransactions.length);

        this.tokenTransactions = tokentxList;

        console.log(this.tokenTransactions.length);
      },
      fail => {
        console.error('tokenComponent.getAllTransfers(): error getting transfers');
        console.error(fail);
      }
    )
  }


  ngOnInit(): void {
    if (!this.selected && this.route.snapshot.paramMap.get('id')) {
      this.tokenService.show(this.route.snapshot.params['id']).subscribe(
        (success) => {
          this.selected = success;
          console.log("succeeded getting token, getting transfers.");

          this.getAllTransfers();

          console.log("succeeded getting transfers");
        },
        (fail) => {
          console.error('tokenComponent.ngOnInit(): error initializing Token by id');
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
      this.reloadTokens();
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
