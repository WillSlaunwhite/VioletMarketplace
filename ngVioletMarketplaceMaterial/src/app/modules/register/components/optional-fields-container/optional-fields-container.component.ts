import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-optional-fields-container',
  templateUrl: './optional-fields-container.component.html',
  styleUrls: ['./optional-fields-container.component.scss']
})
export class OptionalFieldsContainerComponent implements OnInit {
  // TODO have this component take an array
  // of optional fields it can iterate over
  // and display in some sort of grid
  // is this supposed to be an obj array??
  @Input() fields: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
