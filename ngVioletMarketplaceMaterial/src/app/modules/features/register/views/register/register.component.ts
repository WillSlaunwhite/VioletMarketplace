import { Store } from '@ngrx/store';
import { Component, Inject, Input, OnChanges, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import User from 'src/app/models/user';
import { registerUser } from '../../state/register.actions';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { startWith } from 'rxjs';
import { slideInTop } from 'src/app/animations/animations';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss'],
	animations: [slideInTop],
})
export class RegisterComponent implements OnInit, OnChanges {
	registerForm: FormGroup;
	optionalFieldsArr: FormArray = this.fb.array([]);
	selectedTabIndex: number = 0;
	optionalFieldsStrings: string[] = [];

	@Input() summary: any = {
		requiredFields: {},
		optionalFields: {},
	};

	constructor(private fb: FormBuilder, private store: Store, public dialogRef: MatDialogRef<RegisterComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
		this.registerForm = this.fb.group({
			requiredFields: this.fb.group(
				{
					email: ['', [Validators.required, Validators.email]],
					username: ['', Validators.required],
					password: ['', [Validators.required, Validators.minLength(8)]],
					confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
				},
				{ validator: this.passwordMatchValidator }
			),
			optionalFields: this.fb.group({}),
		});
	}

	ngOnInit(): void {
		// turns the passed in array of field strings
		// into form controls
		if (this.data.optionalFieldsStrings) {
			this.data.optionalFieldsStrings.forEach((field: string) => {
				this.addOptionalField(field);
			});
		}

		// adds the value to the summary object
		// as the form changes
		this.registerForm.valueChanges.pipe(startWith(this.registerForm.value)).subscribe((value) => {
			if (value) {
				this.summary = value;
			}
		});
	}

	ngOnChanges(): void {}

	onSubmit(): void {
		if (this.registerForm.valid) {
			const user: User = {
				...this.registerForm.value.requiredFields,
				...this.registerForm.value.optionalFields,
			};
			this.store.dispatch(registerUser({ user }));
			this.dialogRef.close();
		} else {
			// * shows all validation
			this.registerForm.markAllAsTouched();
			this.selectedTabIndex = 0;
		}
	}

	passwordMatchValidator(fg: FormGroup) {
		const mismatch = fg.get('password')!.value !== fg.get('confirmPassword')!.value;
		if (mismatch) {
			fg.get('confirmPassword')!.setErrors({ mismatch: true });
		} else {
			fg.get('confirmPassword')!.setErrors(null);
		}
		return null; // Return null since the error is now on the control itself
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
		});
	}
}
