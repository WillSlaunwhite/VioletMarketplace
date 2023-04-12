import { Component, OnInit } from '@angular/core';
import {
  AnimationTriggerMetadata,
  trigger,
  state,
  style,
  animate,
  transition,
  query,
} from '@angular/animations';
import User from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [
    trigger('slideAnimation', [
      transition(':increment', [
        query(':enter, :leave', [style({ transform: 'translateX(0%)' })]),
        query(':leave', [
          animate(
            '300ms ease-in-out',
            style({ transform: 'translateX(-100%)' })
          ),
        ]),
        query(':enter', [
          style({ transform: 'translateX(100%)' }),
          animate('300ms ease-in-out', style({ transform: 'translateX(0%)' })),
        ]),
      ]),
      transition(':decrement', [
        query(':enter, :leave', [style({ transform: 'translateX(0%)' })]),
        query(':leave', [
          animate(
            '300ms ease-in-out',
            style({ transform: 'translateX(100%)' })
          ),
        ]),
        query(':enter', [
          style({ transform: 'translateX(-100%)' }),
          animate('300ms ease-in-out', style({ transform: 'translateX(0%)' })),
        ]),
      ]),
    ]),
  ],
})
export class RegisterComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}
  registerUser: User = new User();
  confirmPassword: string | null = '';
  textColor = 'white';
  ngOnInit(): void {}

  register(): void {
    this.authService.register(this.registerUser).subscribe(
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
}
