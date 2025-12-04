import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TripDataService } from '../../../services/data';
import { ItemCard } from '../item-card/item-card';
import { RouterModule } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Trip } from '../../../shared/models/trip.model';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ItemCard, RouterModule],
  templateUrl: './items-list.html',
  styleUrls: ['./items-list.css']
})
export class ItemsList implements OnInit {

  trips$!: Observable<Trip[]>;  
  searchText: string = '';

  constructor(private tripDataService: TripDataService) {}

  ngOnInit(): void {
    // Тепер беремо ВСІ тури з API
    this.trips$ = this.tripDataService.getItems();
  }

  onSearchChange() {
    const text = this.searchText.toLowerCase();

    this.trips$ = this.tripDataService.getItems().pipe(
      map((trips: Trip[]) =>
        trips.filter((trip: Trip) =>
          trip.name.toLowerCase().includes(text) ||
          trip.destination.toLowerCase().includes(text)
        )
      )
    );
  }
}
