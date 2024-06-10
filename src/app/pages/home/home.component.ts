import { Component } from '@angular/core';
import { ReservationFormComponent } from '../reservation-form/reservation-form.component';
import { DecorationComponent } from '../decoration/decoration.component';
import { IStation } from '../../models/station.mode';
import { StationService } from '../../services/station.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReservationFormComponent, DecorationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  stations: IStation[] = [];
  constructor(private stationService: StationService) {}

  ngOnInit(): void {
    console.log(this.stations);
    this.getStations();
  }

  getStations(): void {
    this.stationService
      .getStations()
      .subscribe((stations) => (this.stations = stations));
  }
}
