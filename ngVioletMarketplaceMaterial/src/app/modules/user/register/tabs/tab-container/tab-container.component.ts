import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-container',
  template: `
    <mat-tab-group class="register-tab-container" selectedIndex="1" (selectedIndexChange)="onTabChange($event)">
      <app-register-tab class="required-tab" label="required"></app-register-tab>
      <app-register-tab></app-register-tab>
      <app-register-tab></app-register-tab>
    </mat-tab-group>
  `,
  styleUrls: ['./tab-container.component.scss']
})
export class TabContainerComponent implements OnInit {
  @Input() selectedTabIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onTabChange(index: number) {
    this.selectedTabIndex = index;
  }
}
