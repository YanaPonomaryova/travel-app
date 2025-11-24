import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TripDataService } from '../../../services/data';
import { Trip } from '../../models/trip.model';
import { ItemCard } from '../item-card/item-card'; // приклад імпорту дочірнього компонента, якщо є

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ItemCard],
  templateUrl: './items-list.html',
  styleUrls: ['./items-list.css']
})
export class ItemsList implements OnInit {

  trips: Trip[] = [];
  searchText: string = '';

  constructor(private tripDataService: TripDataService) {}

  ngOnInit(): void {
    this.trips = this.tripDataService.getItems();
  }

  onTripSelected(trip: Trip) {
    alert(`Ви обрали подорож: ${trip.name} до ${trip.destination}`);
  }

  get filteredTrips(): Trip[] {
    return this.trips.filter(trip =>
      trip.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
      trip.destination.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
