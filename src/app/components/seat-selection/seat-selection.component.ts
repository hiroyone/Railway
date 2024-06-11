import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeatsService } from '../../services/seats.service';
import { ISeat } from '../../models/seat.model';  // Ensure this path is correct

@Component({
  selector: 'app-seat-selection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './seat-selection.component.html',
  styleUrls: ['./seat-selection.component.scss']
})
export class SeatSelectionComponent implements OnInit {
  seats: ISeat[] = [];

  constructor(private seatsService: SeatsService) {}

  ngOnInit() {
    this.loadSeats();
  }

  loadSeats() {
    this.seatsService.getSeats().subscribe(
      (data: ISeat[]) => {
        console.log('Seats fetched successfully:', data);
        this.seats = data;
      },
      (error) => {
        console.error('Error fetching seats:', error);
      }
    );
  }
}
