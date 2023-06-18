import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent implements OnInit {
  @Input() label: string = '';
  type: string = 'text';

  constructor() { }

  ngOnInit(): void {
  }

  getFieldType() {
    if (this.label === 'email') { this.type = 'email'; }
    else if (this.label === 'password') { this.type = 'password'; }
  }

}
