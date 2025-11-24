import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TripDataService } from '../../../services/data';
import { Trip } from '../../models/trip.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './items-list.html',
  styleUrls: ['./items-list.css']
})
export class ItemsList implements OnInit, OnDestroy {

  trips: Trip[] = [];
  searchText: string = '';
  private sub: Subscription = new Subscription();

  constructor(private tripDataService: TripDataService) {}

  ngOnInit(): void {
    this.sub = this.tripDataService.trips$.subscribe(data => {
      this.trips = data; 
    });
  }

  onTripSelected(trip: Trip) {
    alert(`Ви обрали подорож: ${trip.name} до ${trip.destination}`);
  }

  onSearchChange() {
    this.tripDataService.filterItems(this.searchText); 
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
