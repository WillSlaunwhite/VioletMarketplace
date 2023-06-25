import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @Input() selectedTabIndex: number = 0;
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      requiredFields: this.fb.group({
        email: ['', Validators.required],
        username: ['', Validators.required],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
      }),
      optionalFields: this.fb.array([])
    });
  }
  ngOnInit(): void {
  }

  get requiredFields(): FormGroup {
    return this.registerForm.get('requiredFields') as FormGroup;
  }

  get optionalFields(): FormArray {
    return this.registerForm.get('optionalFields') as FormArray;
  }

  addOptionalField(fieldInfo: any) {
    this.optionalFields.push(this.fb.group({
      fieldName: [fieldInfo.name],
      // * other properties?
    }))
  }

  onTabChange(index: number) {
    this.selectedTabIndex = index;
  }
}
