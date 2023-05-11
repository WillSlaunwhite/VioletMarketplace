import {
  AfterViewInit,
  Component,
  HostBinding,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
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

  buttons = [
    {
      wrapperClass: 'tokens-button-wrapper button-wrapper',
      buttonClass: 'tokens-button',
      text: 'tokens',
    },
    {
      wrapperClass: 'wallet-button-wrapper button-wrapper',
      buttonClass: 'wallet-button',
      text: 'wallet',
    },
    {
      wrapperClass: 'collections-button-wrapper button-wrapper',
      buttonClass: 'collections-button',
      text: 'collections',
    },
    {
      wrapperClass: 'create-button-wrapper button-wrapper',
      buttonClass: 'create-button',
      text: 'create',
    },
  ];

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
    this.matIconRegistry.addSvgIcon(
      'my-icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/logos/retro_vm_logo.svg'
      )
    );
    this.createForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required],
    });
  }

  ngAfterViewInit(): void {
    this.generateRandomAnimations();
    this.assignFloatingAnimations();
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
  }

  onSubmit(): void {
    if (this.createForm.valid) {
      const tokenData = this.createForm.value;
      console.log('Token data:', tokenData);

      // Call the function to create the new token using the tokenData
      // this.createToken(tokenData);
    }
  }

  assignFloatingAnimations() {
    const buttons = document.querySelectorAll('.button-container .button-wrapper');
    buttons.forEach((button: any) => {
      const animationDuration = Math.random() * 10 + 10;
      const animationDelay = Math.random() * 3;
      const directionX = Math.random() * 20 - 10;
      const directionY = Math.random() * 20 - 10;
      button.animate(
        [
          { transform: 'translate(0, 0)' },
          { transform: `translate(${directionX}px, ${directionY}px)` },
          { transform: 'translate(0, 0)' }
        ],
        {
          duration: animationDuration * 1000,
          iterations: Infinity,
          easing: 'ease-in-out',
          delay: animationDelay * 1000,
        }
      );
    });
    // const buttons = document.querySelectorAll(
    //   '.button-container .button-wrapper'
    // );
    // buttons.forEach((button: any) => {
    //   const htmlButton = button as HTMLElement;
    //   const animationClass = `floating-${Math.floor(Math.random() * 4) + 1}`; // Random number between 1 and 4
    //   htmlButton.classList.add(animationClass);

    //   htmlButton.addEventListener('mousemove', (event: MouseEvent) => {
    //     const rect = htmlButton.getBoundingClientRect();
    //     const x = event.clientX - rect.left; //x position within the element.
    //     const y = event.clientY - rect.top; //y position within the element.

    //     htmlButton.style.transform = `translate(${50}px, ${y + 5}px)`;
    //   });
    // });
  }

  generateRandomAnimations() {
    const buttons = Array.from(document.querySelectorAll('.button-container .button-wrapper button'));

    buttons.forEach((button: any) => {
      button.onmousemove = (e: MouseEvent) => {
        let rect = button.getBoundingClientRect();
        let x = e.clientX - rect.left - button.offsetWidth / 2;
        let y = e.clientY - rect.top - button.offsetHeight / 2;

        x /= button.offsetWidth / 2;
        y /= button.offsetHeight / 2;

        const multiplier = 10;
        // button.style.transform = `rotateX(${multiplier * -y}deg) rotateY(${multiplier * x}deg)`;
        // button.style.transform = `rotate(${multiplier * -y}deg, ${multiplier * x}deg)`;
        button.style.transform = `rotate3d(${multiplier * (-x + y)}, ${multiplier * (-y + x)})`;
      }

      button.onmouseout = () => {
        button.style.transform = '';
      }
    });
  }

}
