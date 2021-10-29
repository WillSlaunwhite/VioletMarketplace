import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}
  loginUser = new User();

  login(user: User) {
    console.log('logging in');
    console.log(user);
    this.auth.login(user.username, user.password).subscribe(
      (login) => {
        this.router.navigateByUrl('/home');
      },
      (fail) => {
        console.error('LoginComponent.login(): login failed');
        console.error(fail);
      }
    );
  }

  ngOnInit(): void {}
}
