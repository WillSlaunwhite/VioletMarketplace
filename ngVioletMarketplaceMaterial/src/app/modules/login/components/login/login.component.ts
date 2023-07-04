import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { slideInTop } from 'src/app/animations/animations';
import User from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [slideInTop]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

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
  }


}
