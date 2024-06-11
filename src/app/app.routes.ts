import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TicketsPageComponent } from './pages/tickets-page/tickets-page.component';
import { InformationPageComponent } from './pages/information-page/information-page.component';
import { UserComponent } from './pages/user/user.component';
import { PayComponent } from './pages/pay/pay.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tickets', component: TicketsPageComponent },
  { path: 'information', component: InformationPageComponent },
  { path: 'user', component: UserComponent },
  { path: 'pay', component: PayComponent },
];
