import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemsList } from './items-list';
import { TripDataService } from '../../../services/data';
import { of } from 'rxjs';
import { ItemCard } from '../item-card/item-card';
import { RouterTestingModule } from '@angular/router/testing';
import { Trip } from '../../../shared/models/trip.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

describe('ItemsList Integration Test', () => {
  let component: ItemsList;
  let fixture: ComponentFixture<ItemsList>;
  let mockService: jasmine.SpyObj<TripDataService>;

  const mockTrips: Trip[] = [
    {
      id: 1,
      name: 'Venice',
      destination: 'Italy',
      startDate: '2025-01-01',
      endDate: '2025-01-07',
      price: 1200,
      description: 'Trip to Venice',
      imageUrl: 'img1.jpg',
      isSpecial: false
    },
    {
      id: 2,
      name: 'Paris',
      destination: 'France',
      startDate: '2025-02-01',
      endDate: '2025-02-10',
      price: 1500,
      description: 'Trip to Paris',
      imageUrl: 'img2.jpg',
      isSpecial: true
    }
  ];

  beforeEach(async () => {
    mockService = jasmine.createSpyObj('TripDataService', ['getItems']);
    mockService.getItems.and.returnValue(of(mockTrips));

    await TestBed.configureTestingModule({
      imports: [
        ItemsList,
        ItemCard,
        CommonModule,
        FormsModule,
        RouterTestingModule
      ],
      providers: [{ provide: TripDataService, useValue: mockService }]
    }).compileComponents();

    fixture = TestBed.createComponent(ItemsList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render the correct number of ItemCard components', () => {
    const cards = fixture.nativeElement.querySelectorAll('app-item-card');
    expect(cards.length).toBe(2);
  });

  it('should receive trips from TripDataService', () => {
    component.trips$.subscribe(trips => {
      expect(trips.length).toBe(2);
      expect(trips[0].name).toBe('Venice');
    });
  });
});
