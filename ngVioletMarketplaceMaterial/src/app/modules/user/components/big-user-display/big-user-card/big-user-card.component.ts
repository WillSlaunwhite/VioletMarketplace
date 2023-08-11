import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import User from 'src/app/models/user';

@Component({
  selector: 'app-big-user-card',
  templateUrl: './big-user-card.component.html',
  styleUrls: ['./big-user-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class BigUserCardComponent implements OnInit {
  @Input() user: User | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
