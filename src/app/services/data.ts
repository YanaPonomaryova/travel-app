import { Injectable } from '@angular/core';
import { Trip } from '../shared/models/trip.model';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {

  private trips: Trip[] = [
    { id: 1, name: 'Венеційська пригода', destination: 'Венеція', startDate: '2025-12-01', endDate: '2025-12-07', price: 1200, description: 'Подорож каналами Венеції.', imageUrl: 'https://andy-travel.com.ua/sites/default/files/venice_grand_chanel_22.jpg', isSpecial: true },
    { id: 2, name: 'Гірський трекінг', destination: 'Альпи', startDate: '2026-01-10', endDate: '2026-01-20', price: 1500, description: 'Активний відпочинок серед гір.', imageUrl: 'https://gra.travel/media/images/first-alps.width-1920.jpg', isSpecial: false }
  ];

  // BehaviorSubject для реактивного стану
  private tripsSubject = new BehaviorSubject<Trip[]>(this.trips);
  trips$ = this.tripsSubject.asObservable();

  getItems(): Observable<Trip[]> {
    return of(this.trips);
  }

  // Фільтрація списку
  filterItems(searchText: string) {
    const filtered = this.trips.filter(trip =>
      trip.name.toLowerCase().includes(searchText.toLowerCase()) ||
      trip.destination.toLowerCase().includes(searchText.toLowerCase())
    );
    this.tripsSubject.next(filtered);
  }

  getItemById(id: number) {
  return this.trips.find(t => t.id === id);
}
}
