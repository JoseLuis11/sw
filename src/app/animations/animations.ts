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

export const collapseTriggerAnimation = trigger('collapse', [
  transition(':enter', [
    style({ opacity: 0, height: 0, overflow: 'hidden' }),
    animate('.25s', style({ opacity: 1, height: '*' })),
  ]),
  transition(':leave', [
    style({ overflow: 'hidden' }),
    animate('.25s', style({ opacity: 0, height: 0, overflow: 'hidden' }))
  ])
]);
