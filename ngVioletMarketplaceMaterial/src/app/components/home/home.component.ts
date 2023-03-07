import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Token from 'src/app/models/token';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  tokens: Token[] = [];
  token: Token | null = new Token();
  descriptionShowing: boolean = false;

  constructor(
    private tokenSvc: TokenService,
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.getTokens();
  }

  getTokens(): void {
    this.tokenSvc.index().subscribe({
      next: (tokenList) => {
        this.tokens = tokenList;
        this.tokens.forEach((token) => {
          if(token.name === 'Pulp Fiction') {
            this.token = token;
          }
        });
      },
      error: (failed) => {
        console.error('homeComponent.getTokens(): Error getting Token List');
        console.log(failed);
      },
    });
  }
}
