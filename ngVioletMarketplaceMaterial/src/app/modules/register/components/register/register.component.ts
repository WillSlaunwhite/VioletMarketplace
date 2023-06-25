import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import User from 'src/app/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnChanges {
  @Input() selectedTabIndex: number = 0;
  registerForm: FormGroup;
  @Input() optionalFieldsStrings: string[] = [];
  optionalFieldsArr: FormArray = this.fb.array([]);
  summary: any = {};

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
    console.log(this.optionalFields);
    console.log(this.optionalFieldsArr);
  }

  ngOnInit(): void {
    this.optionalFieldsStrings.forEach((field: string) => {
      //   const tempOptionalArray: FormArray = this.registerForm.get('optionalFields')! as FormArray;
      const newOptionalField: FormControl = new FormControl('');
      //   if (newOptionalField) {
      this.addOptionalField(newOptionalField);
      //     tempOptionalArray.push(newOptionalField);
      //   }
    });

    console.log(this.optionalFields);

    this.optionalFieldsArr = this.optionalFields;;
  }

  ngOnChanges(): void {
    this.registerForm.valueChanges.subscribe(value => {
      if (value) {
        this.summary = value;
      }
    });
  }

  onSubmit(): void {
    const user: User = {
      ...this.registerForm.value.requiredFields,
      ...this.registerForm.value.optionalFields
    };
    console.log(user);
    // TODO: send user to backend
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
