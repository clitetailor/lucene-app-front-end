import { trigger, style, animate, transition, state } from '@angular/animations';

const defaultStyle = style({});

const currentStyle = style({
  opacity: 1,
  transform: 'translate(0, 0)'
});

const nextStyle = style({
  opacity: 0,
  transform: 'translate(0, 200px)'
});

export const fadeOut = trigger(
  'fadeOut', [
    transition(':leave', [
      currentStyle,
      animate('1s ease-in-out', nextStyle)
    ])
  ]
);
