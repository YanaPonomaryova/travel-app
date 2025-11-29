import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TripDataService } from '../../../services/data';
import { ItemCard } from '../item-card/item-card';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ItemCard],
  templateUrl: './items-list.html',
  styleUrls: ['./items-list.css']
})
export class ItemsList {

  trips$;  
  searchText: string = '';

  constructor(private tripDataService: TripDataService) {
    this.trips$ = this.tripDataService.trips$;  
  }

  onSearchChange() {
    this.tripDataService.filterItems(this.searchText);
  }
}
