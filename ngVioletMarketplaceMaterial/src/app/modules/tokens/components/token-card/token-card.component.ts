import { Component, Input, OnInit } from '@angular/core';
import { slideInTop } from 'src/app/animations/animations';
@Component({
  selector: 'app-token-card',
  templateUrl: './token-card.component.html',
  styleUrls: ['./token-card.component.scss'],
  animations: [slideInTop],
})
export class TokenCardComponent implements OnInit {
  @Input() token: any;

  constructor() { }

  ngOnInit(): void {
  }

}
