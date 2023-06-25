import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary-tab',
  templateUrl: './summary-tab.component.html',
  styleUrls: ['./summary-tab.component.scss']
})
export class SummaryTabComponent implements OnInit {
  // TODO
  // take an array of fields
  // display a grid based on the number of fields
  // array of fields can actually be taken out of state
  // when the event to move to the third tab happens
  // get current form data, take all the field names
  // and values and display them for confirmation

  constructor() { }

  ngOnInit(): void {
  }

}
