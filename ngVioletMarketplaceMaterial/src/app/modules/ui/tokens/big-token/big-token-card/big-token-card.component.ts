import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { slideInTop } from 'src/app/animations/animations';
import Token from 'src/app/models/token';

@Component({
  selector: 'app-big-token-card',
  templateUrl: './big-token-card.component.html',
  styleUrls: ['./big-token-card.component.scss'],
  animations: [slideInTop],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BigTokenCardComponent implements OnInit {
  @Input()
  token: Token | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
