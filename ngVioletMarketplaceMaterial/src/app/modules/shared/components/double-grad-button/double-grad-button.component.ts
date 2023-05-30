import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-double-grad-button',
  templateUrl: './double-grad-button.component.html',
  styleUrls: ['./double-grad-button.component.scss'],
  animations: [
    trigger('float', [
      transition(':enter', [
        style({ transform: 'translate(0, 0)' }),
        animate('{{duration}}s {{delay}}s ease-in-out infinite', style({ transform: 'translate({{directionX}}px, {{directionY}}px)' }))
      ])
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DoubleGradButtonComponent implements OnInit {
  @Input() label: string = '';
  @Input() duration: number = Math.random() * 10 + 10;
  @Input() delay: number = Math.random() * 3;
  @Input() directionX: number = Math.random() * 20 - 10;
  @Input() directionY: number = Math.random() * 20 - 10;
  constructor() { }

  ngOnInit(): void {
  }

}