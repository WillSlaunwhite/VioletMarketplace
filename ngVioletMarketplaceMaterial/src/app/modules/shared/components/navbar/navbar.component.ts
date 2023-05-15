import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import User from 'src/app/models/user';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { RegisterComponent } from 'src/app/modules/auth/components/register/register.component';
import { LoginComponent } from 'src/app/modules/auth/components/login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    private breakpointObserver: BreakpointObserver,
    private auth: AuthService
  ) { }
  username: string | null = null;
  user: User | null = new User();
  searchTerm: string | null = null;

  loggedIn(): boolean {
    return this.auth.isUserLoggedIn();
  }
  logout() {
    this.auth.logout();
  }

  ngOnInit(): void {
    this.user = this.auth.currentUserValue;
  }


  openRegisterDialog(): void {
    this.dialog.open(RegisterComponent);
  }

  openLoginDialog(): void {
    this.dialog.open(LoginComponent);
  }

  // isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  //   .pipe(
  //     map(result => result.matches),
  //     shareReplay()
  //   );

}
