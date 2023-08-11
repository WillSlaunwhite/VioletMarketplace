import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-warning-message',
  templateUrl: './warning-message.component.html',
  styleUrls: ['./warning-message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WarningMessageComponent implements OnInit {
  @Input() message: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
