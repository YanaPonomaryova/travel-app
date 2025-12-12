import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule, NgIf, NgClass } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Trip } from '../../models/trip.model';
import { HoverHighlightDirective } from '../../directives/hover-highlight';
import { ShortenPipe } from '../../pipes/shorten-pipe';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [
    CommonModule,
    NgIf,
    NgClass,
    RouterModule,
    HoverHighlightDirective,
    ShortenPipe
  ],
  templateUrl: './item-card.html',
  styleUrls: ['./item-card.css']
})
export class ItemCard {
  @Input() trip!: Trip;

  @Output() selectTrip = new EventEmitter<Trip>();

  onSelect() {
    this.selectTrip.emit(this.trip);
  }
}
