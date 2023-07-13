import { Store } from '@ngrx/store';
import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import User from 'src/app/models/user';
import { slideInTop } from 'src/app/animations/animations';
import { login } from '../../state/user.actions';

@Component({
  selector: 'app-alt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [slideInTop]
})
export class LoginComponent implements OnInit {
  constructor(@Optional() private dialogRef: MatDialogRef<LoginComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private store: Store) { }

  loginUser = new User();
  showPage = false;

  ngOnInit(): void { }

  login(): void {
    this.closeDialog();
    this.store.dispatch(login({ username: this.loginUser.username, password: this.loginUser.password }));
  }

  closeDialog(): void {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }
}
