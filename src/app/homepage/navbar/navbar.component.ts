import { Component, HostListener, ViewChild } from '@angular/core';

import { transition, trigger, useAnimation,state,style,animate, AnimationEvent } from '@angular/animations';

@Component({


    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    animations: [],
    standalone: true,

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

  




}




