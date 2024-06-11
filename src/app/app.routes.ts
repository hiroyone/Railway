import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TicketsPageComponent } from './pages/tickets-page/tickets-page.component';
import { InformationPageComponent } from './pages/information-page/information-page.component';
import { DecorationComponent } from './pages/decoration/decoration.component';
import { ReservationFormComponent } from './pages/reservation-form/reservation-form.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tickets', component: TicketsPageComponent },
  { path: 'information', component: InformationPageComponent },
  { path: 'decoration', component: DecorationComponent },
  { path: 'reservation', component: ReservationFormComponent },
];
