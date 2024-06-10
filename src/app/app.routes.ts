import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TicketsPageComponent } from './pages/tickets-page/tickets-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tickets', component: TicketsPageComponent },
];
