import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import User from 'src/app/models/user';

@Component({
  selector: 'app-user-results',
  templateUrl: './user-results.component.html',
  styleUrls: ['./user-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserResultsComponent implements OnInit {
  @Input()
  users$: Observable<User[] | null> = of(null);

  constructor() { }

  ngOnInit(): void {
  }

}
