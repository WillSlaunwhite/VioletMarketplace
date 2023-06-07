import { Component, OnInit } from '@angular/core';
import { slideInTop } from 'src/app/animations/animations';

@Component({
  selector: 'app-alt-register',
  templateUrl: './alt-register.component.html',
  styleUrls: ['./alt-register.component.scss'],
  animations: [slideInTop]
})
export class AltRegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
