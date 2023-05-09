import { AfterViewInit, Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
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
export class UserPageComponent implements OnInit, AfterViewInit {
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
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private auth: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private tokenSvc: TokenService,
    private formBuilder: FormBuilder
  ) {
    this.matIconRegistry.addSvgIcon('my-icon', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/logos/retro_vm_logo.svg'));
    this.createForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required],
    });
  }

  ngAfterViewInit(): void {
    this.generateRandomAnimations();
  }

  ngOnInit(): void {
    // this.username = this.auth.getUsername();
    // this.auth
    //   .getUser(this.username!)
    //   .pipe(
    //     switchMap((username) =>
    //       forkJoin([
    //         this.auth.getUser(username.username),
    //         this.tokenSvc.getByUsername(username.username),
    //       ])
    //     )
    //   )
    //   .subscribe({
    //     next: ([user, tokens]: [User, Token[]]) => {
    //       this.user = user;
    //       this.tokens = tokens;
    //     },
    //     error: (err) => {
    //       console.error(
    //         'UserComponent.init(): error getting User and tokens:\n' + err
    //       );
    //     },
    // });
  }

  onSubmit(): void {
    if (this.createForm.valid) {
      const tokenData = this.createForm.value;
      console.log('Token data:', tokenData);

      // Call the function to create the new token using the tokenData
      // this.createToken(tokenData);
    }
  }


assignRandomAnimations() {
  const buttons = document.querySelectorAll('.button-container .button-wrapper');
  buttons.forEach((button) => {
    const animationClass = `floating-${Math.floor(Math.random() * 4) + 1}`; // Random number between 1 and 4
    button.classList.add(animationClass);
  });
}




  generateRandomAnimations() {
  const buttons = document.querySelectorAll('.button-container .button-wrapper');
  const container = document.querySelectorAll('.user-info-container');
  buttons.forEach((button) => {
    const animationDuration = Math.random() * 8 + 4; // Random number between 5 and 8
    const animationDelay = Math.random() * 8; // Random number between 0 and 8
    const directionX = Math.random() * 16 - 8; // Random number between -12 and 12
    const directionY = Math.random() * 16 - 8; // Random number between -12 and 12

    button.animate(
      [
        { transform: 'translate(0, 0)' },
        { transform: `translate(${directionX}px, ${directionY}px)` },
        { transform: 'translate(0, 0)' },
      ],
      {
        duration: animationDuration * 1000,
        iterations: Infinity,
        easing: 'ease-in-out',
        delay: animationDelay * 1000, // Add this line to include the random delay
      }
    );
  });
}

}
