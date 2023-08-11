import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import User from 'src/app/models/user';

@Component({
  selector: 'app-big-user-list',
  templateUrl: './big-user-list.component.html',
  styleUrls: ['./big-user-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BigUserListComponent {
  @Input()
  users$: Observable<User[] | null> = of(null);

  constructor(private store: Store<{ users: User[] }>) {
  }
}
