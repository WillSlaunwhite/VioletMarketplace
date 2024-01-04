import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { slideInTop } from 'src/app/animations/animations';
import User from 'src/app/models/user';
import { login } from 'src/app/modules/features/user/state/user.actions';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
	animations: [slideInTop],
})
export class LoginComponent implements OnInit {
	loginForm: FormGroup;

	constructor(
		private fb: FormBuilder,
		private store: Store,
		private dialogRef: MatDialogRef<LoginComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) {
		this.loginForm = this.fb.group({
			username: ['', Validators.required],
			password: ['', Validators.required],
		});
	}

	ngOnInit(): void {}

	onSubmit() {
		const user: User = {
			...this.loginForm.value,
		};

		// * dispatch action to login
		// * if error, display popup error saying
		// * invalid credentials
		// else {
		// this.loginForm.markAllAsTouched();
		// }

		this.store.dispatch(login(user));

		this.dialogRef.close();
	}
}
