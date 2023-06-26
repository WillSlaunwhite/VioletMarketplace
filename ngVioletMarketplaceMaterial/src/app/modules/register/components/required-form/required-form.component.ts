import { Component, Input, OnInit } from '@angular/core';
import { AbstractFormGroupDirective, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-required-form',
  templateUrl: './required-form.component.html',
  styleUrls: ['./required-form.component.scss']
})
export class RequiredFormComponent implements OnInit {
  requiredFormFields: FormGroup;

  @Input()
  set formFields(formGroup: FormGroup) {
    if (!(formGroup instanceof FormGroup)) {
      throw new Error('The provided form group must be a FormGroup.')
    }
    this.requiredFormFields = formGroup;
  }

  getControl(name: string): FormControl {
    return this.requiredFormFields.get(name) as FormControl;
  }

  constructor(private fb: FormBuilder) {
    this.requiredFormFields = this.fb.group({})
  }

  ngOnInit(): void {
  }

}
