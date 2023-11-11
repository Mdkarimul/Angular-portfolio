import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { AllInOneModule } from 'src/app/external_material/material.module';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { AboutComponent } from '../about/about.component';
import { ServicesComponent } from '../services/services.component';
import { FooterComponent } from '../footer/footer.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ClientFeedComponent } from '../client-feed/client-feed.component';
@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    HeroSectionComponent,
    AboutComponent,
    ServicesComponent,
    FooterComponent,
    PortfolioComponent,
    ClientFeedComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AllInOneModule
  ]
})
export class HomeModule { }
