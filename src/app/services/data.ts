import { Injectable } from '@angular/core';
import { Trip } from '../shared/models/trip.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {

  private baseUrl = '/trips'; 

  constructor(private http: HttpClient) {}

  // Отримати всі тури
  getItems(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.baseUrl);
  }

  // Отримати один тур за id
  getItemById(id: number): Observable<Trip> {
    return this.http.get<Trip>(`${this.baseUrl}/${id}`);
  }

  // Додати новий тур
  addItem(item: any): Observable<Trip> {
    const newItem: Trip = {
      id: 0,
      name: item.name || '',
      destination: item.destination || '',
      startDate: item.startDate || '',
      endDate: item.endDate || '',
      price: Number(item.price) || 0,
      description: item.description || '',
      imageUrl: item.imageUrl || '',
      isSpecial: false
    };

    return this.http.post<Trip>(this.baseUrl, newItem);
  }
}
