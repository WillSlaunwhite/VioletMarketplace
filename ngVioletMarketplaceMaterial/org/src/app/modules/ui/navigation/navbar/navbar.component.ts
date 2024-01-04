import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {} from '@angular/material/divider';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import User from 'src/app/models/user';
import { LoginComponent } from 'src/app/modules/features/login/views/login/login.component';
import { RegisterComponent } from 'src/app/modules/features/register/views/register/register.component';
import { logout, removeJwt } from 'src/app/modules/features/user/state/user.actions';
import { isLoggedIn, selectCurrentUser } from 'src/app/modules/features/user/state/user.selectors';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
	isLoggedIn$: Observable<boolean | null>;
	user$: Observable<User | null>;

	constructor(private store: Store, private dialog: MatDialog) {
		this.user$ = this.store.select(selectCurrentUser);

		this.isLoggedIn$ = this.store.select(isLoggedIn);
	}

	ngOnInit(): void {}

	logout(): void {
		this.store.dispatch(logout());
		this.store.dispatch(removeJwt());
		window.location.reload();
	}

	openRegisterDialog(): void {
		this.dialog.open(RegisterComponent, {
			data: {
				optionalFieldsStrings: ['display name', 'biography', 'profile picture', 'wallet url'],
				selectedTabIndex: 0,
			},
		});
	}

	openLoginDialog(): void {
		this.dialog.open(LoginComponent);
	}

	getRegisterDialogAction(): Function {
		return () => this.openRegisterDialog();
	}

	getLogoutAction(): Function {
		return () => this.logout();
	}

	getLoginDialogAction(): Function {
		return () => this.openLoginDialog();
	}
}
