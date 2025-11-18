// item-card.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Trip } from '../../models/trip.model';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-card.html',
  styleUrls: ['./item-card.css']
})
export class ItemCard {
  @Input() trip!: Trip;
}
