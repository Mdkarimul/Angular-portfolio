
import {  Routes } from '@angular/router';
import { HomeComponent } from './homepage/home/home.component';

import { DashboardComponent } from './admin/dashboard/dashboard.component';

export const routes: Routes = [

     { 
          path: '', component:HomeComponent
     },
     {
          path:"dashboard",
          component:DashboardComponent
     }

     ]

