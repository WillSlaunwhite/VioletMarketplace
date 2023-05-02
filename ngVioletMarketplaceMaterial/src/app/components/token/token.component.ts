import { Component, OnInit } from '@angular/core';
import User from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.scss'],
})
export class TokenComponent implements OnInit {
  constructor(private auth: AuthService) {}
  user: User = new User();
  ngOnInit(): void {
    this.auth.getUsername();
    this.auth.getUser(this.auth.getUsername()!).subscribe((user) => {
      this.user = user;
    });
  }
}
