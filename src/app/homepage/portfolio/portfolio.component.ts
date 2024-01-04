import { Component } from '@angular/core';
import { setAlternateWeakRefImpl } from '@angular/core/primitives/signals';
import { TitleStrategy } from '@angular/router';

@Component({
<<<<<<< HEAD
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  standalone:true,
=======
    selector: 'app-portfolio',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.scss'],
    standalone: true
>>>>>>> 39544537facb2c98129f97ba225b9cd092140912
})
export class PortfolioComponent {

  public all:boolean = true;
  public web:boolean = false;
  public mobile:boolean =false;
  public others:boolean = false;


  project_tab(Ele:string){
   
    switch(Ele)
    {
      case  'all' :
      this.all = true;
      this.mobile = false;
      this.web =false;
      this.others = false;
      break;

      case 'web' :
        this.web = true;
        this.all = false;
        this.mobile =false;
        this.others =false;
        break;

        case 'mobile' :
          this.mobile =true;
          this.all =false;
          this.others = false;
          this.web = false;
          break;

          case 'others' :
            this.others = true;
            this.all =false;
            this.web =false;
            this.mobile = false;
            break;

            default : 
            this.all = true
            break;
    }
  


}



}
