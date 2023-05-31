import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-big-token-card-button',
  templateUrl: './big-token-card-button.component.html',
  styleUrls: ['./big-token-card-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BigTokenCardButtonComponent implements OnInit {
  @Input() buttonText: string = "";
  @Input() customClass: string = "";


  constructor() { }

  ngOnInit(): void {
  }

}
