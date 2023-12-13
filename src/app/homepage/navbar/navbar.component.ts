import { Component, HostListener, ViewChild } from '@angular/core';

import { transition, trigger, useAnimation,state,style,animate, AnimationEvent } from '@angular/animations';
import { transitionAnimation } from '../../animations';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [

    trigger('openClose', [
      // ...
      state('open', style({
        height: '0px',
        opacity: 0,
      })),
      state('close', style({
        height: '250px',
        opacity: 1,
        backgroundColor: '#ddd'
      })),

     
      transition('* => open', [
        animate('0.5s')
      ]),

    ]),
      
  ],
})
export class NavbarComponent {


  public getScreenWidth: any;
  public getScreenHeight: any;
  
  ngOnInit() {
      this.getScreenWidth = window.innerWidth;
      this.getScreenHeight = window.innerHeight;
  }
  
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
  }

  mobile_nav = {
    display : 'none'
  }


  isOpen =true;
  toggle_nav() {
    this.isOpen = !this.isOpen;
  }

}




