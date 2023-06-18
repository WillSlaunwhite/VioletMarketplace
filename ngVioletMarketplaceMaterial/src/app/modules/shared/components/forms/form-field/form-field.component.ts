import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-field',
  template: `
    <mat-form-field class="form-field">
      <mat-label>{{label}}</mat-label>
      <input type=type matInput>
    </mat-form-field>
    `,
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent implements OnInit {
  @Input() label: string = '';
  // @Input() control: FormControl;
  type: string = 'text';

  constructor() { }

  ngOnInit(): void {
    this.getFieldType();
  }

  getFieldType() {
    if (this.label === 'email') { this.type = 'email'; }
    else if (this.label === 'password') { this.type = 'password'; }
  }

}
