import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { BehaviorSubject, Observable, map, mergeMap, of, startWith, switchMap, tap } from 'rxjs';
import User from 'src/app/models/user';
import { MatDialog } from '@angular/material/dialog';
import { MatDivider, MatDividerModule } from '@angular/material/divider';
import { } from '@angular/material/divider';
import { LoginComponent } from 'src/app/modules/user/components/login/login.component';
import { Store } from '@ngrx/store';
import { isLoggedIn, selectCurrentUser } from 'src/app/modules/user/state/user.selectors';
import { logout, removeJwt } from 'src/app/modules/user/state/user.actions';
import { AltRegisterComponent } from 'src/app/modules/user/components/alt-register/alt-register.component';
import { FormControl, FormGroup } from '@angular/forms';
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

  constructor(private store: Store, private dialog: MatDialog, private renderer: Renderer2, private el: ElementRef,
  ) {
    this.user$ = this.store.select(selectCurrentUser);
    this.searchTerm = new FormControl('');
    this.searchForm = new FormGroup({
      search: this.searchTerm
    })
  }

  ngOnInit(): void {
  }

  logout(): void {
    // this.store.dispatch(logout());
    this.store.dispatch(removeJwt());
    window.location.reload();
  }

  openRegisterDialog(): void {
    this.dialog.open(AltRegisterComponent);
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
}
