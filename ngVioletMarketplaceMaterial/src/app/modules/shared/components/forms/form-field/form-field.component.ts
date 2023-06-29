import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent implements OnInit {
  @Input() label: string = '';
  @Input() control: FormControl = new FormControl();
  @Input() placeholder: string = '';
  @Input() type: string = '';
  @Input() size: string = 'medium';

  constructor() { }

  ngOnInit(): void {
  }

}
