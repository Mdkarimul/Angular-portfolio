
import { Component } from '@angular/core';
<<<<<<< HEAD
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './homepage/home/home.component';
=======
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

>>>>>>> 39544537facb2c98129f97ba225b9cd092140912
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone:true,
<<<<<<< HEAD
  imports:[RouterOutlet,HomeComponent]
=======
  imports:[RouterOutlet,RouterLink,RouterLinkActive]
>>>>>>> 39544537facb2c98129f97ba225b9cd092140912
})
export class AppComponent {
  title = 'portfolio';
}
