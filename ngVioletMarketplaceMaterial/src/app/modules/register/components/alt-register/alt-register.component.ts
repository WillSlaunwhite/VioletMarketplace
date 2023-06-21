import { Component, OnInit } from '@angular/core';
import { slideInTop } from 'src/app/animations/animations';
import User from 'src/app/models/user';
import { AuthService } from '../../../auth/services/auth.service';
import { UserService } from '../../../user/services/user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-alt-register',
  templateUrl: './alt-register.component.html',
  styleUrls: ['./alt-register.component.scss'],
  animations: [slideInTop]
})
export class AltRegisterComponent implements OnInit {
  registerUser: User = new User();
  confirmPassword: string | null = '';
  selectedTabIndex: number = 0;
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private userSvc: UserService,
    private router: Router,
    // private dialogRef: MatDialogRef<AltRegisterComponent>,
  ) {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
      displayName: new FormControl(''),
      biography: new FormControl(''),
      pictureUrl: new FormControl(''),
      wallet: new FormControl(''),
      termsAccepted: new FormControl(false, Validators.requiredTrue),
    });

  }

  ngOnInit(): void {
  }

  submit(): void {
    this.registerUser.email = this.registerForm.value.email;
    this.registerUser.username = this.registerForm.value.username;
    this.registerUser.password = this.registerForm.value.password;
    this.registerUser.displayName = this.registerForm.value.displayName;
    this.registerUser.biography = this.registerForm.value.biography;
    this.registerUser.pictureUrl = this.registerForm.value.pictureUrl;
    this.registerUser.wallet = this.registerForm.value.wallet;

    // register and login the user as before...
    this.register();
  }


  // this seems to be basically working, but
  // todo seems to be making multiple calls to /register, getting 500 error
  register(): void {
    console.log('RegisterComponent: register method called');
    this.userSvc.register(this.registerUser).subscribe(
      () => {
        // this.closeDialog()
        this.loginNewUser(this.registerUser);
      },
      (error) => {
        console.error(
          'RegisterComponent.register(): registration failed\n' + error
        );
      }
    );
  }

  loginNewUser(user: User): void {
    this.userSvc.login(user.username, user.password).subscribe(
      (jwt) => {
        this.userSvc.getUserByUsername(user.username).subscribe(
          (user) => {
            console.log('User fetched successfully');
            this.router.navigateByUrl('/home').then(() => {
              console.log('Navigation to /home successful');
            }).catch((error) => {
              console.error('Navigation to /home failed: ', error);
            });
          },
          (error) => {
            console.error('RegisterComponent.loginNewUser: fetch user failed\n' + error);
          }
        );
      },
      (error) => {
        console.error('RegisterComponent.loginNewUser: login failed\n' + error);
      }
    );
  }


  closeDialog(): void {
    // this.dialogRef.close();
  }

  nextTab() {
    this.selectedTabIndex = (this.selectedTabIndex + 1) % 3;
  }
  previousTab() {
    this.selectedTabIndex = (this.selectedTabIndex - 1) % 3;
  }

  onTabChange(index: number) {
    this.selectedTabIndex = index;
  }

  passwordMatchValidator(): ValidatorFn {
    return (): ValidationErrors | null => {
      const password = this.registerForm.get('password')!.value;
      const confirmPassword = this.registerForm.get('confirmPassword')!.value;
      return password === confirmPassword ? null : { 'mismatch': true };
    };
  }
}
