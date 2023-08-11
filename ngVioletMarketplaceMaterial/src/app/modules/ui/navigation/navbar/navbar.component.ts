import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Observable } from 'rxjs';
import User from 'src/app/models/user';
import { MatDialog } from '@angular/material/dialog';
import { } from '@angular/material/divider';
import { LoginComponent } from 'src/app/modules/features/login/components/login/login.component';
import { Store } from '@ngrx/store';
import { isLoggedIn, selectCurrentUser } from 'src/app/modules/features/user/state/user.selectors';
import { logout, removeJwt } from 'src/app/modules/features/user/state/user.actions';
import { FormControl, FormGroup } from '@angular/forms';
import { RegisterComponent } from 'src/app/modules/features/register/components/register/register.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isLoggedIn$: Observable<boolean | null> = this.store.select(isLoggedIn);
  user$: Observable<User | null>;
  isSearchFieldFocused: boolean = false;
  searchForm: FormGroup;
  searchTerm: FormControl;

  constructor(private store: Store,
    private dialog: MatDialog,
    private renderer: Renderer2,
    private el: ElementRef,
    private router: Router,
  ) {
    this.user$ = this.store.select(selectCurrentUser);
    this.searchTerm = new FormControl('');
    this.searchForm = new FormGroup({ search: this.searchTerm });
  }

  ngOnInit(): void {
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
        selectedTabIndex: 0
      }
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

  toggleSearchFocus() {
    this.isSearchFieldFocused = !this.isSearchFieldFocused;
    if (this.isSearchFieldFocused) {
      this.renderer.addClass(this.el.nativeElement.querySelector('.search'), 'focused');
    } else {
      this.renderer.removeClass(this.el.nativeElement.querySelector('.search'), 'focused');
    }
  }

  onSubmit(): void {
    this.router.navigate(['/results'], { queryParams: { query: this.searchTerm.value } });
    this.searchTerm.setValue('');
  }
}
