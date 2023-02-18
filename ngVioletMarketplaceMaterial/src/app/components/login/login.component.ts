import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import User from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}
  loginUser = new User();
  showPage = false;


  ngOnInit(): void {}

  login() {
    this.auth.login(this.loginUser.username, this.loginUser.password).subscribe(
      (success) => {
        this.router.navigateByUrl('/home');
      },
      (error) => {
        console.error('LoginComponent.login(): login failed\n' + error);
      }
    );
  }
}
