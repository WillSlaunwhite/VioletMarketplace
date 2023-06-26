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
  @Input() optionalFieldsStrings: string[] = [];

  registerForm: FormGroup;
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
      optionalFields: this.fb.group({})
    });
  }

  ngOnInit(): void {
    this.optionalFieldsStrings.forEach((field: string) => {
      this.addOptionalField(field);
    });
  }

  ngOnChanges(): void {
    this.registerForm.valueChanges.subscribe(value => {
      console.log(value);

      if (value) {
        console.log('hello?' + value);

        if (typeof value === "number") {
          console.log(value);


        }


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

  get optionalFields(): FormGroup {
    return this.registerForm.get('optionalFields') as FormGroup;
  }

  addOptionalField(fieldName: string) {
    (this.registerForm.get('optionalFields')! as FormGroup).addControl(fieldName, new FormControl(''));

  }

  onTabChange(index: number) {
    this.selectedTabIndex = index;
  }
}
