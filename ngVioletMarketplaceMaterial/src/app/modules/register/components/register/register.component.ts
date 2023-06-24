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
      const tempOptionalArray: FormArray = this.registerForm.get('optionalFields')! as FormArray;
      const newOptionalField: FormControl = new FormControl(field);
      if (newOptionalField) {
        // this.addOptionalField(newOptionalField);
        tempOptionalArray.push(newOptionalField);
      }
    });
    console.log(this.optionalFields);

    this.optionalFieldsArr = this.optionalFields;
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
