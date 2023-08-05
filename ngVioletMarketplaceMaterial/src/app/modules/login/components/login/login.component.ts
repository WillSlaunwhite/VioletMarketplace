import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { slideInTop } from 'src/app/animations/animations';
import User from 'src/app/models/user';
import { login } from 'src/app/modules/user/state/user.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [slideInTop]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
    private store: Store,
    @Optional() private dialogRef: MatDialogRef<LoginComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void { }
  
  onSubmit() {
    const user: User = {
      ...this.loginForm.value
    };

    // * dispatch action to login
    // * if error, display popup error saying
    // * invalid credentials
    // else {
    // this.loginForm.markAllAsTouched();
    // }

    this.store.dispatch(login(user));

    this.dialogRef.close();
  }

}
