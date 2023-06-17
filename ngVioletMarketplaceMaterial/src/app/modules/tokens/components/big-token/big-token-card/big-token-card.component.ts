import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { slideInTop } from 'src/app/animations/animations';

@Component({
  selector: 'app-big-token-card',
  templateUrl: './big-token-card.component.html',
  styleUrls: ['./big-token-card.component.scss'],
  animations: [slideInTop],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BigTokenCardComponent implements OnInit {
  @Input() token: any;

  constructor() { }

  ngOnInit(): void {
  }

}
