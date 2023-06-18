import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-container',
  template: `
    <mat-tab-group class="register-tab-container" selectedIndex="selectedTabIndex" (selectedIndexChange)="onTabChange($event)">
      <mat-tab label="Tab 1">
        <app-register-tab class="required-tab" label="required"></app-register-tab>
      </mat-tab>
      <mat-tab label="Tab 2">
        <app-register-tab></app-register-tab>
      </mat-tab>
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
