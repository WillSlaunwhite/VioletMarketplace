import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-summary-tab',
  templateUrl: './summary-tab.component.html',
  styleUrls: ['./summary-tab.component.scss']
})
export class SummaryTabComponent implements OnInit {
  @Input() summary: any = {
    requiredFields: {},
    optionalFields: {}
  };
  @Output() requestFormSubmit = new EventEmitter<void>()

  objectKeys = Object.keys;

  constructor() { }

  ngOnInit(): void { }

  handleFormSubmit(): void {
    console.log('in summary tab submit');
    this.requestFormSubmit.emit();
  }
}
