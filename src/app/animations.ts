import { animation, style,state, animate, trigger, transition, useAnimation } from '@angular/animations';
export const transitionAnimation = animation([

  state('open', style({
    height: '200px',
    opacity: 1,
    backgroundColor: 'yellow'
  })),
  state('closed', style({
    height: '100px',
    opacity: 0.8,
    backgroundColor: 'blue'
  })),

  transition('* => closed', [
    animate('1s')
  ]),
  transition('* => open', [
    animate('0.5s')
  ]),
  
]);