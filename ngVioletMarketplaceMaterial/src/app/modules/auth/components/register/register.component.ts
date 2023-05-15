import { Component, OnInit } from '@angular/core';
import User from 'src/app/models/user';
import { AuthService } from '../../services/auth.service';
import { NavigationEnd, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { slideInAnimation } from 'src/app/animations/animations';
import { filter } from 'rxjs';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from 'src/app/modules/shared/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [slideInAnimation],
})
export class RegisterComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<RegisterComponent>,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) { }
  registerUser: User = new User();
  confirmPassword: string | null = '';
  registerForm: FormGroup = new FormGroup({});
  registering: boolean = false;
  animationData = '';
  animationDataValue = '';

  ngOnInit(): void {
    // Initialize register form with validation
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onRegister(): void {
    if (this.registerForm.valid) {
      // Perform register logic here, e.g. send data to server
      this.registering = true;
      setTimeout(() => {
        // Simulate register success
        this.registering = false;
        // Reset form
        this.registerForm.reset();
      }, 2000);
    }
  }
  register(): void {
    this.userService.register(this.registerUser).subscribe(
      (success) => {
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
      (success) => {
        this.router.navigateByUrl('/home');
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
