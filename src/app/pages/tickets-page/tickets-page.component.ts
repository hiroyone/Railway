import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tickets-page',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './tickets-page.component.html',
  styleUrls: ['./tickets-page.component.scss']
})
export class TicketsPageComponent implements OnInit {
  wagons: any[] = [];
  seats: any[] = [];
  private apiUrl = 'https://railway.stepprojects.ge/api';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.getWagons().subscribe(
      data => {
        console.log('Wagons fetched successfully:', data);
        this.wagons = data;
      },
      error => {
        console.error('Error fetching wagons:', error);
      }
    );
  }

  getWagons(): Observable<any[]> {
    const url = `${this.apiUrl}/trains`;
    console.log('Fetching wagons from:', url);
    return this.http.get<any[]>(url).pipe(
      catchError(error => {
        console.error('Error in getWagons:', error);
        return of([]);
      })
    );
  }

  onWagonChange(event: any) {
    const wagonId = event.target.value;
    console.log('Wagon selected:', wagonId);
    this.loadSeats(wagonId);
  }

  loadSeats(wagonId: string) {
    const url = `${this.apiUrl}/seats?wagonId=${wagonId}`;
    console.log('Fetching seats from:', url);
    this.http.get<any[]>(url).pipe(
      catchError(error => {
        console.error('Error in loadSeats:', error);
        return of([]);
      })
    ).subscribe(
      data => {
        console.log('Seats fetched successfully:', data);
        this.seats = data;
      },
      error => {
        console.error('Error fetching seats:', error);
      }
    );
  }

  onSearch() {
    this.router.navigate(['/information']);
  }
}
