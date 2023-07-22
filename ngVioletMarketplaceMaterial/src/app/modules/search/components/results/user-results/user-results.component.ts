import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-user-results',
  templateUrl: './user-results.component.html',
  styleUrls: ['./user-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserResultsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
