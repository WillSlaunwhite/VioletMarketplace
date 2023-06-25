import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @Input() selectedTabIndex: number = 0;
  registerForm: FormGroup;
  @Input() optionalFieldsStrings: string[] = [];
  optionalFieldsArr: FormArray = this.fb.array([]);

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
    this.optionalFieldsStrings.forEach((field: string) => {
      this.addOptionalField(new FormControl());
    });
  }

  get requiredFields(): FormGroup {
    return this.registerForm.get('requiredFields') as FormGroup;
  }

  get optionalFields(): FormArray {
    return this.registerForm.get('optionalFields') as FormArray;
  }

  addOptionalField(fieldInfo: FormControl) {
    const tempOptionalArray: FormArray = this.registerForm.get('optionalFields')! as FormArray;
    tempOptionalArray.push(fieldInfo);
  }

  onTabChange(index: number) {
    this.selectedTabIndex = index;
  }
}
