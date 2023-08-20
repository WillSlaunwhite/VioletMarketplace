import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { slideInTop } from 'src/app/animations/animations';
import Token from 'src/app/models/token';
import { RegisterComponent } from 'src/app/modules/features/register/views/register/register.component';
import { loadPopularTokens } from 'src/app/modules/features/tokens/state/tokens.actions';
import { getAllTokens, getPopularTokens } from 'src/app/modules/features/tokens/state/tokens.selectors';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
	animations: [slideInTop],
})
export class HomeComponent implements OnInit {
	tokens$ = this.store.pipe(select(getPopularTokens));

	constructor(private router: Router, private route: ActivatedRoute, private store: Store, private dialog: MatDialog) {
	}

	ngOnInit(): void {
		this.store.dispatch(loadPopularTokens());
	}

	openRegisterDialog(): void {
		this.dialog.open(RegisterComponent, {
			data: {
				optionalFieldsStrings: ['display name', 'biography', 'profile picture', 'wallet url'],
				selectedTabIndex: 0,
			},
		});
	}
}
