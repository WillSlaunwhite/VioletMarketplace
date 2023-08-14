import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  searchForm: FormGroup;
  searchTerm: FormControl;
  isSearchFieldFocused: boolean = false;
  
  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private router: Router,
  ) {
    this.searchTerm = new FormControl('');
    this.searchForm = new FormGroup({ search: this.searchTerm });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.router.navigate(['/results'], { queryParams: { query: this.searchTerm.value } });
    this.searchTerm.setValue('');
  }

  toggleSearchFocus() {
    this.isSearchFieldFocused = !this.isSearchFieldFocused;
    if (this.isSearchFieldFocused) {
      this.renderer.addClass(this.el.nativeElement.querySelector('.search'), 'focused');
    } else {
      this.renderer.removeClass(this.el.nativeElement.querySelector('.search'), 'focused');
    }
  }
}
