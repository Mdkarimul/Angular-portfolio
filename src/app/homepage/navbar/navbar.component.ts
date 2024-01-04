import { Component, HostListener, ViewChild } from '@angular/core';

import { transition, trigger, useAnimation,state,style,animate, AnimationEvent } from '@angular/animations';
import { transitionAnimation } from '../../animations';
@Component({
<<<<<<< HEAD
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone:true,
  animations: [


      
  ],
=======
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    animations: [],
    standalone: true,
>>>>>>> 39544537facb2c98129f97ba225b9cd092140912
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




