import { Component, OnInit } from '@angular/core';
import {
  AnimationTriggerMetadata,
  trigger,
  state,
  style,
  animate,
  transition,
  query,
} from '@angular/animations';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [
    trigger('slideAnimation', [
      transition(':increment', [
        query(':enter, :leave', [style({ transform: 'translateX(0%)' })]),
        query(':leave', [
          animate(
            '300ms ease-in-out',
            style({ transform: 'translateX(-100%)' })
          ),
        ]),
        query(':enter', [
          style({ transform: 'translateX(100%)' }),
          animate('300ms ease-in-out', style({ transform: 'translateX(0%)' })),
        ]),
      ]),
      transition(':decrement', [
        query(':enter, :leave', [style({ transform: 'translateX(0%)' })]),
        query(':leave', [
          animate(
            '300ms ease-in-out',
            style({ transform: 'translateX(100%)' })
          ),
        ]),
        query(':enter', [
          style({ transform: 'translateX(-100%)' }),
          animate('300ms ease-in-out', style({ transform: 'translateX(0%)' })),
        ]),
      ]),
    ]),
  ],
})
export class RegisterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  cards = [
    { title: 'Card 1', description: 'This is card 1' },
    { title: 'Card 2', description: 'This is card 2' },
    { title: 'Card 3', description: 'This is card 3' },
    { title: 'Card 4', description: 'This is card 4' },
    { title: 'Card 5', description: 'This is card 5' },
  ];

  registering: boolean = true;

  currentSlide = 0;

  prevSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    }
  }

  nextSlide() {
    // You can replace the condition below with the actual number of slides in your carousel
    if (this.currentSlide < 2) {
      this.currentSlide++;
    }
  }
}
