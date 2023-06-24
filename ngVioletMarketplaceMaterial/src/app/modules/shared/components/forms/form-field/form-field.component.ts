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

  constructor() {
    this.control = new FormControl();
    // console.log(this.control);

  }

  ngOnInit(): void {
  }

}
