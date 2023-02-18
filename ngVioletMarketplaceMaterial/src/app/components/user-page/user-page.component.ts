import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { throwError } from 'rxjs';
import User from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss'],
})
export class UserPageComponent implements OnInit {
  editProfile: boolean = false;
  user: User = new User();
  username: string | null = '';
  constructor(
    private auth: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.username = this.auth.getUsername();
    if (this.username != null && this.username != '') {
      this.auth.getUser(this.username).subscribe({
        next: (user) => (this.user = user),
        error: (err) => {
          console.error('UserComponent.init(): error getting User:\n' + err);
        }
      });
    }
  }
}
