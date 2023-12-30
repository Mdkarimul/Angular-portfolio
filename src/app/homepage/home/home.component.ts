import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { ClientFeedComponent } from '../client-feed/client-feed.component';
import { ContactComponent } from '../contact/contact.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ServicesComponent } from '../services/services.component';
import { AboutComponent } from '../about/about.component';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: true,
    imports: [NavbarComponent, HeroSectionComponent, AboutComponent, ServicesComponent, PortfolioComponent, ContactComponent, ClientFeedComponent, FooterComponent]
})
export class HomeComponent {

}
