import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStation } from '../models/station.mode';

@Injectable({
  providedIn: 'root',
})
export class StationService {
  private apiUrl = 'https://railway.stepprojects.ge/api';
  constructor(private http: HttpClient) {}

  getSeats(): Observable<any[]> {
    const url = `${this.apiUrl}/stations`;
    console.log(url);
    return this.http.get<any[]>(url);
  }
}
