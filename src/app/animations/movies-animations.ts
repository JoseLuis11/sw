import {style, animate, trigger, transition} from '@angular/animations';

export const fadeTriggerAnimation = trigger('fade', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('200ms', style({ opacity: 1 })),
  ]),
  transition(':leave', [
    animate('100ms', style({ opacity: 0 }))
  ])
]);
