// items-list.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCard } from '../item-card/item-card';
import { Trip } from '../../models/trip.model';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, ItemCard],
  templateUrl: './items-list.html',
  styleUrls: ['./items-list.css']
})
export class ItemsList {
  trips: Trip[] = [
  {
    id: 1,
    name: 'Венеційська пригода',
    destination: 'Венеція, Італія',
    startDate: '2025-12-01',
    endDate: '2025-12-07',
    price: 1200,
    description: 'Незабутня подорож каналами Венеції.',
    imageUrl: 'https://andy-travel.com.ua/sites/default/files/venice_grand_chanel_22.jpg',
    isSpecial: true       
  },
  {
    id: 2,
    name: 'Гірський трекінг',
    destination: 'Альпи, Франція',
    startDate: '2026-01-10',
    endDate: '2026-01-20',
    price: 1500,
    description: 'Активний відпочинок серед снігових вершин.',
    imageUrl: 'https://gra.travel/media/images/first-alps.width-1920.jpg',
    isSpecial: false      
  }
];

}
