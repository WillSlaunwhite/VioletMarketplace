import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-container',
  template: `
    <form class="register-form-container">
      <app-form-field label="email"></app-form-field>
      <app-form-field label="username"></app-form-field>
    </form>
  `,
  styleUrls: ['./form-container.component.scss']
})
export class FormContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
