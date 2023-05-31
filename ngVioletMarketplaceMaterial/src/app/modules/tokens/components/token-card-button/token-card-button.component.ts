import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-token-card-button',
  templateUrl: './token-card-button.component.html',
  styleUrls: ['./token-card-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TokenCardButtonComponent implements OnInit {
  @Input() buttonText: string = "";
  @Input() customClass: string = "";


  constructor() { }

  ngOnInit(): void {
  }

}
