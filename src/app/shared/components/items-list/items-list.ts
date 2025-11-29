import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TripDataService } from '../../../services/data';
import { ItemCard } from '../item-card/item-card';
import { RouterModule } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ItemCard, RouterModule],
  templateUrl: './items-list.html',
  styleUrls: ['./items-list.css']
})
export class ItemsList {

  trips$: any;  
  searchText: string = '';

  constructor(private tripDataService: TripDataService) {
    // ІНІЦІАЛІЗУЄМО ТУТ — ТЕПЕР ВСЕ ОК
    this.trips$ = this.tripDataService.trips$;
  }

  onSearchChange() {
    const text = this.searchText.toLowerCase();

    this.trips$ = this.tripDataService.trips$.pipe(
      map(trips =>
        trips.filter(trip =>
          trip.name.toLowerCase().includes(text) ||
          trip.destination.toLowerCase().includes(text)
        )
      )
    );
  }
}
