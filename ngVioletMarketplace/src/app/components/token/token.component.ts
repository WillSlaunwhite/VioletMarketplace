import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Token } from 'src/app/models/token';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})
export class TokenComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tokenService: TokenService,
  ) { }
  newToken: Token = new Token();
  tokens: Token[] = [];

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

  createToken(token: Token) {
    this.tokenService.create(token).subscribe(
      (newBet) => {
        this.reloadTokens();
        this.newToken = new Token();
      },
      (fail) => {
        console.error('TokenComponent.addToken(): Error creating Token');
        console.error(fail);
      }
    );
  }

  ngOnInit(): void {
  }

}
