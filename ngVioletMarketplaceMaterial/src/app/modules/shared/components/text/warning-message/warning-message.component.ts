import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-warning-message',
  templateUrl: './warning-message.component.html',
  styleUrls: ['./warning-message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WarningMessageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
