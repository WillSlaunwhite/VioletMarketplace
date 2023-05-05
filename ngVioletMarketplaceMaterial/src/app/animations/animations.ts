import {
  animate,
  animateChild,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { delay } from 'rxjs';

export const slideInAnimation = trigger('slideInRight', [
  transition('* <=> *', [
    style({ transform: 'translateX(100%)' }),
    animate('1200ms ease-in-out', style({ transform: 'translateX(0%)' })),
  ]),

  // transition('* <=> *', [
  //   style({ position: 'relative' }),
  //   query(':enter, :leave', [
  //     style({
  //       position: 'absolute',
  //       top: 0,
  //       left: 0,
  //       width: '100%',
  //     }),
  //   ]),
  //   query(':enter', [style({ left: '-100%' })]),
  //   query(':leave', animateChild()),
  //   group([
  //     query(':leave', [animate('300ms ease-out', style({ left: '100%' }))]),
  //     query(':enter', [animate('300ms ease-out', style({ left: '0%' }))]),
  //   ]),
  // ]),
]);

export const slideInTop = trigger('slideInTop', [
  transition('* <=> *', [
    style({ transform: 'translateY(-20%)' }),
    animate('700ms ease-in-out', style({ transform: 'translateX(0%)' })),
  ]),
]);

// export const slideInAnimation = trigger('routeAnimations', [
//   transition('* <=> *', [
//     style({ position: 'relative' }),
//     query(':enter, :leave', [
//       style({
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         width: '100%',
//       }),
//     ]),
//     query(':enter', [style({ left: '-100%' })]),
//     query(':leave', animateChild()),
//     group([
//       query(':leave', [animate('300ms ease-out', style({ left: '100%' }))]),
//       query(':enter', [animate('300ms ease-out', style({ left: '0%' }))]),
//     ]),
//   ]),
//   transition('* <=> *', [
//     style({ position: 'relative' }),
//     query(':enter, :leave', [
//       style({
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         width: '100%',
//       }),
//     ]),
//     query(':enter', [style({ left: '-100%' })]),
//     query(':leave', animateChild()),
//     group([
//       query(':leave', [
//         animate('200ms ease-out', style({ left: '100%', opacity: 0 })),
//       ]),
//       query(':enter', [animate('300ms ease-out', style({ left: '0%' }))]),
//       query('@*', animateChild()),
//     ]),
//   ]),
// ]);
