import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import User from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { RegisterComponent } from '../register/register.component';
import { Observable, throwError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<RegisterComponent>,
    private auth: AuthService, private router: Router) { }
  loginUser = new User();
  showPage = false;


  ngOnInit(): void { }

  login() {
    this.auth.login(this.loginUser.username, this.loginUser.password).subscribe(
      response => {
        this.loginUser = this.auth.currentUserValue!;
        this.router.navigate(['/home']);
      },
      error => {
        console.error('loginComponent: Unable to log in: ' + error);
      }
    );
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
