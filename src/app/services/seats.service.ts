import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SeatsService {
  private apiUrl = 'https://railway.stepprojects.ge/api';
  constructor(private http: HttpClient) {}

  getSeats(wagonId: string): Observable<any[]> {
    const url = `${this.apiUrl}/seats?wagonId=${wagonId}`;
    console.log('Fetching seats from URL:', url);
    return this.http.get<any[]>(url);
  }
}
