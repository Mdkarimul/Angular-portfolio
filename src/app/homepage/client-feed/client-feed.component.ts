import { Component } from '@angular/core';
import { CarouselModule,  OwlOptions } from 'ngx-owl-carousel-o';
@Component({
<<<<<<< HEAD
  selector: 'app-client-feed',
  templateUrl: './client-feed.component.html',
  styleUrls: ['./client-feed.component.scss'],
  standalone:true,
  imports : [CarouselModule]

=======
    selector: 'app-client-feed',
    templateUrl: './client-feed.component.html',
    styleUrls: ['./client-feed.component.scss'],
    standalone: true,
    imports: [CarouselModule],
>>>>>>> 39544537facb2c98129f97ba225b9cd092140912
})
export class ClientFeedComponent {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    items:2,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 3
      },
      940: {
        items: 2
      }
    },
    nav: true
  }

}
