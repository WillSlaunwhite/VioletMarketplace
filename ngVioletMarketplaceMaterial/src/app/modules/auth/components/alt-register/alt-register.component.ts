import { Component, OnInit } from '@angular/core';
import { slideInTop } from 'src/app/animations/animations';
import User from 'src/app/models/user';
import { AuthService } from '../../services/auth.service';
import { UserService } from 'src/app/modules/shared/services/user.service';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-alt-register',
  templateUrl: './alt-register.component.html',
  styleUrls: ['./alt-register.component.scss'],
  animations: [slideInTop]
})
export class AltRegisterComponent implements OnInit {
  registerUser: User = new User();
  confirmPassword: string | null = '';

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
    private dialogRef: MatDialogRef<AltRegisterComponent>,
  ) { }

  ngOnInit(): void {
  }

  // this seems to be basically working, but
  // todo seems to be making multiple calls to /register, getting 500 error
  register(): void {
    console.log('RegisterComponent: register method called');
    this.userService.register(this.registerUser).subscribe(
      () => {
        this.closeDialog()
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
    this.authService.login(user.username, user.password).subscribe(
      (jwt) => {
        this.userService.getUserByUsername(user.username).subscribe(
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
    this.dialogRef.close();
  }
}
