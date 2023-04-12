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
import User from 'src/app/models/user';

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
  registerUser: User | null = null;

  ngOnInit(): void {}
}
