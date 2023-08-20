import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  @Input() loginForm: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({});
  }

  ngOnInit(): void { }

  getControl(name: string): FormControl {
    return this.loginForm.get(name) as FormControl;
  }
}
