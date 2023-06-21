import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-register-tab-container',
  templateUrl: './register-tab-container.component.html',
  styleUrls: ['./register-tab-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterTabContainerComponent implements OnInit {

  @Input() selectedTabIndex: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  onTabChange(index: number) {
    this.selectedTabIndex = index;
  }
}
