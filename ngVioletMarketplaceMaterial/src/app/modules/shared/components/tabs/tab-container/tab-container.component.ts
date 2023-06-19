import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-container',
  templateUrl: './tab-container.component.html',
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
