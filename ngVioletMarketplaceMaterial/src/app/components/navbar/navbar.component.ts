import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import User from 'src/app/models/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private breakpointObserver: BreakpointObserver,
    private auth: AuthService
  ) {}
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
    this.username = this.auth.getUsername();
    this.auth.getUser(this.username!).subscribe({
      next: (user) => (this.user = user),
      error: (err) => {
        console.log('Navbar Component: Not logged in.');
      }
    });
  }




  // isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  //   .pipe(
  //     map(result => result.matches),
  //     shareReplay()
  //   );

}
