import { Component, OnInit } from '@angular/core';
import User from 'src/app/models/user';
import { AuthService } from 'src/app/modules/shared/services/auth.service';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.scss'],
})
export class TokenComponent implements OnInit {
  user: User = new User();

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    if (this.auth.currentUserValue) {
      this.user = this.auth.currentUserValue;
    }
  }
}
