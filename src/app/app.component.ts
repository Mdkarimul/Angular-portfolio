
import { Component } from '@angular/core';
import { HomeComponent } from './homepage/home/home.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone:true,
  imports:[RouterOutlet,HomeComponent]
})
export class AppComponent {
  title = 'portfolio';
}
