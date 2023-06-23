import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent implements OnInit {
  @Input() label: string = '';
  @Input() control: FormControl;
  @Input() placeholder: string = '';
  @Input() type: string = 'text';

  // @Input()
  // set formControl(control: AbstractControl) {
  //   if (!(control instanceof FormControl)) {
  //     throw new Error('The provided form control must be an instance of FormControl');
  //   }
  //   this.control = control;
  // }

  constructor() {
    this.control = new FormControl();
  }

  ngOnInit(): void {
  }

}
