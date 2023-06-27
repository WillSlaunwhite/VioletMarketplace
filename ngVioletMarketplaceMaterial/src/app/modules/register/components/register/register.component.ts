import { Store } from '@ngrx/store';
import { Component, Inject, Input, OnChanges, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import User from 'src/app/models/user';
import { registerUser } from '../../state/register.actions';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnChanges {
  registerForm: FormGroup;
  optionalFieldsArr: FormArray = this.fb.array([]);
  selectedTabIndex: number = 0;
  optionalFieldsStrings: string[] = [];
  summary: any = {};

  constructor(private fb: FormBuilder,
    private store: Store,
    public dialogRef: MatDialogRef<RegisterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.registerForm = this.fb.group({
      requiredFields: this.fb.group({
        email: ['', Validators.email],
        username: ['', Validators.required],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
      }),
      optionalFields: this.fb.group({})
    });
  }

  ngOnInit(): void {
    // turns the passed in array of field strings
    // into form controls
    console.log(this.data.optionalFieldsStrings);

    if (this.data.optionalFieldsStrings) {
      this.data.optionalFieldsStrings.forEach((field: string) => {
        this.addOptionalField(field);
      });
    }
  }

  ngOnChanges(): void {
    // adds the value to the summary object
    // as the form changes
    this.registerForm.valueChanges.subscribe(value => {
      if (value) { this.summary = value; }
    });
  }

  onSubmit(): void {
    const user: User = {
      ...this.registerForm.value.requiredFields,
      ...this.registerForm.value.optionalFields
    };
    console.log(user);
    // TODO: send user to backend
    this.store.dispatch(registerUser({ user }));
  }

  get requiredFields(): FormGroup {
    return this.registerForm.get('requiredFields') as FormGroup;
  }

  get optionalFields(): FormGroup {
    return this.registerForm.get('optionalFields') as FormGroup;
  }

  addOptionalField(fieldName: string) {
    this.optionalFieldsStrings.push(fieldName);
    (this.registerForm.get('optionalFields')! as FormGroup).addControl(this.toCamelCase(fieldName), new FormControl(''));
  }

  onTabChange(index: number) {
    this.selectedTabIndex = index;
  }

  toCamelCase(str: string): string {
    return str.replace(/(?:^\w|\b\w|\s+)/g, (match, index) => {
      if (+match === 0) return '';
      return index === 0 ? match.toLowerCase() : match.toUpperCase();
    })
  }
}
