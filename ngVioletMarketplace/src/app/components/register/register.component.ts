import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}
  newUser: User = new User();
  ngOnInit(): void {}

  register(user: User) {
    console.log('Registering user:');
    console.log(user);
    this.auth.register(user).subscribe(

      (data) => {

        console.log('RegisterComponent.register(): user registered.');
        console.log('RegisterComponent.register(): attempting to sign in...');

        this.auth.login(user.username, user.password).subscribe(

          (next) => {
            console.log('RegisterComponent.register(): user logged in, routing to /home.');
            this.router.navigateByUrl('/home');
          },
          (error) => {
            console.error('RegisterComponent.register(): error logging in.');
            console.error(error);
          }
        );
      },
      (err) => {
        console.error('RegisterComponent.register(): error registering.');
        console.error(err);
      }
    );
  }
}
