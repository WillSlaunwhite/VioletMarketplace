import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import User from 'src/app/models/user';

@Component({
  selector: 'app-big-user-list',
  template: `
    <div #usersContainer appScroll class="users-container d-flex flex-row">
      <app-big-user-card *ngFor="let user of users$ | async" [user]="user"></app-big-user-card>
    </div>
  `,
  styleUrls: ['./big-user-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BigUserListComponent {
  @Input()
  users$: Observable<User[] | null> = of(null);

  constructor(private store: Store<{ users: User[] }>) {
  }
}
