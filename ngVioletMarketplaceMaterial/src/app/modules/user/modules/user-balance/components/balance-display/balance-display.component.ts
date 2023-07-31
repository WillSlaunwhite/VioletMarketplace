import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-balance-display',
  templateUrl: './balance-display.component.html',
  styleUrls: ['./balance-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BalanceDisplayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
