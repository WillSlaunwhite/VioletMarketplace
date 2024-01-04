import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchResultItem } from 'src/app/models/search-result-item';

@Component({
	selector: 'app-search-container',
	templateUrl: './search-container.component.html',
	styleUrls: ['./search-container.component.scss'],
})
export class SearchContainerComponent implements OnInit {
	searchTerm: FormControl = new FormControl('');
	searchForm: FormGroup;
	suggestions: SearchResultItem[] = [];

	constructor(private router: Router) {
		this.searchForm = new FormGroup({ search: this.searchTerm });
	}

	onSubmit(): void {
		this.router.navigate(['/results'], { queryParams: { query: this.searchTerm.value } });
		this.searchTerm.setValue('');
	}
	ngOnInit(): void {}
}
