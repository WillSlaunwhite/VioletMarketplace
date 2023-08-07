import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-required-form',
  templateUrl: './required-form.component.html',
  styleUrls: ['./required-form.component.scss']
})
export class RequiredFormComponent implements OnInit {
  requiredFormFields: FormGroup;

  constructor(private fb: FormBuilder) {
    this.requiredFormFields = this.fb.group({})
  }

  ngOnInit(): void { 
    console.log(this.requiredFormFields);
    
  }

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

  getErrorMessage(controlName: string, errorType: string): string {
    const control = this.requiredFormFields.get(controlName);
    if (control?.hasError(errorType)) {
      switch (errorType) {
        case 'required':
          return `${controlName} is required`;
        case 'email':
          return `Invalid ${controlName}`;
        case 'minlength':
          return `Password must be at least 8 characters`;
        case 'mismatch':
          return `Passwords must match`;
        default:
          return 'default'; // Or some generic error message
      }
    }
    return '';
  }
}
