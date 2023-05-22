import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Observable } from 'rxjs';
import User from 'src/app/models/user';
import { MatDialog } from '@angular/material/dialog';
import { MatDivider, MatDividerModule } from '@angular/material/divider';
import { } from '@angular/material/divider';
import { RegisterComponent } from 'src/app/modules/auth/components/register/register.component';
import { LoginComponent } from 'src/app/modules/auth/components/login/login.component';
import { Store } from '@ngrx/store';
import { isLoggedIn, selectCurrentUser } from 'src/app/modules/auth/state/auth.selectors';
import { logout } from 'src/app/modules/auth/state/auth.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  username: string | null = null;
  user: User | null = new User();
  searchTerm: string | null = null;
  isLoggedIn$: Observable<boolean>;
  user$: Observable<User | null>;
  isSearchFieldFocused: boolean = false;

  constructor(private store: Store, private dialog: MatDialog, private renderer: Renderer2, private el: ElementRef) {
    this.user$ = this.store.select(selectCurrentUser);
    this.isLoggedIn$ = this.store.select(isLoggedIn);
  }

  logout(): void {
    this.store.dispatch(logout());
    window.location.reload();
  }


  ngOnInit(): void {
  }


  openRegisterDialog(): void {
    this.dialog.open(RegisterComponent);
  }

  openLoginDialog(): void {
    this.dialog.open(LoginComponent);
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
