import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { secretKey } from 'key';
import { filter, forkJoin, switchMap, throwError } from 'rxjs';
import Token from 'src/app/models/token';
import User from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss'],
})
export class UserPageComponent implements OnInit {
  // COIN BASE API KEY
  publicKey = 'RKgBiI3QrJDhUNPD';
  secretKey = secretKey;

  editProfile: boolean = false;
  user: User = new User();
  username: string | null = '';
  tokens: Token[] = [];

  cryptos = [
    // Add your user's crypto balances here
    { name: 'Ethereum', amount: 5 },
    { name: 'Binance Coin', amount: 10 },
  ];

  nfts = [
    // Add your user's NFTs here
    { name: 'NFT 1', image: 'https://example.com/nft1.png' },
    { name: 'NFT 2', image: 'https://example.com/nft2.png' },
  ];

  transactions = [
    // Add your user's transaction history here
    { timestamp: '2023-04-17 12:00:00', details: 'Bought NFT 1 for 2 ETH' },
    { timestamp: '2023-04-16 14:00:00', details: 'Sold NFT 3 for 5 BNB' },
  ];

  displayedColumns: string[] = ['timestamp', 'details'];

  createForm: FormGroup;

  constructor(
    private auth: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private tokenSvc: TokenService,
    private formBuilder: FormBuilder
  ) {
    this.createForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.username = this.auth.getUsername();
    this.auth
      .getUser(this.username!)
      .pipe(
        switchMap((username) =>
          forkJoin([
            this.auth.getUser(username.username),
            this.tokenSvc.getByUsername(username.username),
          ])
        )
      )
      .subscribe({
        next: ([user, tokens]: [User, Token[]]) => {
          this.user = user;
          this.tokens = tokens;
        },
        error: (err) => {
          console.error(
            'UserComponent.init(): error getting User and tokens:\n' + err
          );
        },
      });

    //    v2
    // if (this.username) {
    //   this.auth
    //     .getUser(this.username)
    //     .pipe(switchMap((user) => this.tokenSvc.getByUsername(user.username)))
    //     .subscribe({
    //       next: (tokens) => {
    //         this.tokens = tokens;
    //         console.log(tokens);

    //         // You may not need to set this.user separately, depending on your use case
    //         // this.user = this.auth.getUser(this.username!).getValue();
    //       },
    //       error: (err) => {
    //         console.error(
    //           'UserComponent.init(): error getting User and tokens:\n' + err
    //         );
    //       },
    //     });
    // }

    //    v1
    // if (this.auth.getUsername() != null && this.auth.getUsername() != '') {
    //   this.auth.getUser(this.auth.getUsername()!).subscribe({
    //     next: (user) => {
    //       this.user = user;
    //       this.tokenSvc.getByUsername(user.username).subscribe({
    //         next: (tokens) => {
    //           this.tokens = tokens;
    //         },
    //         error: (err) => {
    //           console.error('UserComponent.init(): error getting user tokens');
    //         },
    //       });
    //     },
    //     error: (err) => {
    //       console.error('UserComponent.init(): error getting User:\n' + err);
    //     },
    //   });
    // }
  }

  onSubmit(): void {
    if (this.createForm.valid) {
      const tokenData = this.createForm.value;
      console.log('Token data:', tokenData);

      // Call the function to create the new token using the tokenData
      // this.createToken(tokenData);
    }
  }
}
