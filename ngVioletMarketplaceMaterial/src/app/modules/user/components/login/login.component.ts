import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import User from 'src/app/models/user';
import { AuthService } from '../../../auth/services/auth.service';
import { Observable, throwError } from 'rxjs';
import { slideInTop } from 'src/app/animations/animations';
import { login } from '../../state/user.actions';
import { selectCurrentUser } from '../../state/user.selectors';
import { AltRegisterComponent } from '../../../register/components/register/alt-register/alt-register.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [slideInTop]
})
export class LoginComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<AltRegisterComponent>,
    private auth: AuthService, private router: Router,
    private store: Store) { }

  loginUser = new User();
  showPage = false;

  ngOnInit(): void { }

  login(): void {
    this.closeDialog();
    this.store.dispatch(login({ username: this.loginUser.username, password: this.loginUser.password }));
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
