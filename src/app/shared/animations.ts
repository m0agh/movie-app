import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

// the fade-in/fade-out animation.
export const FadeIn = trigger('simpleFadeAnimation', [
  // the "in" style determines the "resting" state of the element when it is visible.
  state('in', style({opacity: 1})),
  // fade in when created. this could also be written as transition('void => *')
  transition(':enter', [
    style({opacity: 0}),
    animate(600 )
  ]),
  // fade out when destroyed. this could also be written as transition('void => *')
  transition(':leave',
    animate(600, style({opacity: 0})))
]);
