import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoginComponent } from 'src/app/modules/features/login/views/login/login.component';
import { RegisterComponent } from 'src/app/modules/features/register/views/register/register.component';
import { logout, removeJwt } from 'src/app/modules/features/user/state/user.actions';
import { isLoggedIn } from 'src/app/modules/features/user/state/user.selectors';

@Component({
	selector: 'app-new-nav',
	templateUrl: './new-nav.component.html',
	styleUrls: ['./new-nav.component.scss'],
})
export class NewNavComponent {
	isLoggedIn$: Observable<boolean | null>;
	menuOpen: boolean = false;

	constructor(private store: Store, private dialog: MatDialog) {
		this.isLoggedIn$ = this.store.select(isLoggedIn);
	}

	toggleMenu(): void {
		this.menuOpen = !this.menuOpen;
	}

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
