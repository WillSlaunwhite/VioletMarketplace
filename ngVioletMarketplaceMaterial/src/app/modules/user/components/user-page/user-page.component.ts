import {
  AfterViewInit,
  Component, Input, OnInit
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { secretKey } from 'key';
import Token from 'src/app/models/token';
import User from 'src/app/models/user';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { TokenService } from 'src/app/modules/tokens/services/token.service';
import { ProfileManagementComponent } from '../profile-management/profile-management.component';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss'],
})
export class UserPageComponent implements OnInit, AfterViewInit {
  // COIN BASE API KEY
  publicKey = 'RKgBiI3QrJDhUNPD';
  private secretKey = secretKey;

  editProfile: boolean = false;
  user: User = new User();
  username: string | null = '';
  tokens: Token[] = [];
  displayedColumns: string[] = ['timestamp', 'details'];
  createForm: FormGroup;

  gradientConfigs = {
    redButtonConfig: {
      gradientLayers: [
        'linear-gradient(85.69deg, rgba(71, 29, 144, 0.3) 1.1%, rgba(14, 14, 69, 0.3) 71.94%)',
        'linear-gradient(93.31deg, #833AB4 0%, #FD1D1D 53.39%, #FCB045 94.05%)'
      ],
      borderGradient: 'linear-gradient(to right, #34D1C8 33.56%, #FD241D 78.08%)'
    },
  }
  //  linear-gradient(94.53deg, rgba(213, 117, 42, 0.7) 9.1 %, rgba(119, 179, 136, 0.175) 89.58 %), linear - gradient(95.71deg, rgba(14, 14, 69, 0.7) 19.97 %, rgba(136, 181, 223, 0.7) 85.88 %), linear - gradient(93.24deg, #77B388 0.65 %, #D5752A 74.14 %);;
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private auth: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private tokenSvc: TokenService,
    private formBuilder: FormBuilder,
    public dialog: MatDialog
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

  openDialog(): void {
    const dialogRef = this.dialog.open(ProfileManagementComponent, {
      width: '25em',
      data: { name: "hello", animal: "world" },

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngAfterViewInit(): void {
    // this.generateRandomAnimations();
    this.assignFloatingAnimations();
  }

  ngOnInit(): void {
    this.auth.currentUser.subscribe(user => {
      if (user) {
        this.user = user;
      }
    });
  }

  onSubmit(): void {
    if (this.createForm.valid) {
      const tokenData = this.createForm.value;
      console.log('Token data:', tokenData);

      // Call the function to create the new token using the tokenData
      this.tokenSvc.createToken(tokenData);
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
  }

  generateRandomAnimations() {
    const buttons = Array.from(document.querySelectorAll('.button-container .button-wrapper'));

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
