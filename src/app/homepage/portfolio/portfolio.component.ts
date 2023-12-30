import { Component } from '@angular/core';
import { setAlternateWeakRefImpl } from '@angular/core/primitives/signals';

@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.scss'],
    standalone: true
})
export class PortfolioComponent {


  project_tab(Ele:Element){
   
    Ele.classList.add("active");
    console.log(Ele.classList);
  }


}
