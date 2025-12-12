import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TripDataService } from '../services/data';
import { Trip } from '../shared/models/trip.model';

@Component({
  selector: 'app-item-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './item-details.html',
  styleUrls: ['./item-details.css']
})
export class ItemDetails implements OnInit {

  trip: Trip | null = null;

  constructor(
    private route: ActivatedRoute,
    private tripDataService: TripDataService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.tripDataService.getItemById(id).subscribe({
      next: trip => this.trip = trip,
      error: () => this.trip = null
    });
  }
}
