import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemCard } from './item-card';
import { RouterTestingModule } from '@angular/router/testing';
import { ShortenPipe } from '../../pipes/shorten-pipe';
import { HoverHighlightDirective } from '../../directives/hover-highlight';
import { By } from '@angular/platform-browser';
import { Trip } from '../../models/trip.model';

describe('ItemCard Component', () => {
  let component: ItemCard;
  let fixture: ComponentFixture<ItemCard>;

  const mockTrip: Trip = {
    id: 1,
    name: 'Венеція',
    destination: 'Італія',
    startDate: '2025-01-01',
    endDate: '2025-01-07',
    price: 1200,
    description: 'Дуже довгий опис туру який повинен бути обрізаний пайпом...',
    imageUrl: 'img.jpg',
    isSpecial: true
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ItemCard,
        RouterTestingModule,
        ShortenPipe,
        HoverHighlightDirective
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ItemCard);
    component = fixture.componentInstance;

    component.trip = mockTrip;  
    fixture.detectChanges();
  });

  it('should display trip name', () => {
    const titleEl = fixture.debugElement.query(By.css('h2')).nativeElement;
    expect(titleEl.textContent).toContain(mockTrip.name);
  });

  it('should show special badge if trip is special', () => {
    const badge = fixture.debugElement.query(By.css('.special-badge'));
    expect(badge).toBeTruthy();
  });

  it('should display destination, dates and price', () => {
    const content = fixture.nativeElement.textContent;

    expect(content).toContain(mockTrip.destination);
    expect(content).toContain(mockTrip.startDate);
    expect(content).toContain(mockTrip.endDate);
    expect(content).toContain(mockTrip.price);
  });

  it('should call selectTrip when onSelect() is triggered', () => {
    spyOn(component.selectTrip, 'emit');

    component.onSelect();

    expect(component.selectTrip.emit).toHaveBeenCalledWith(mockTrip);
  });

  it('should create a correct routerLink', () => {
    const link = fixture.debugElement.query(By.css('.details-btn'))
      .nativeElement.getAttribute('ng-reflect-router-link');

    expect(link).toContain('/items');
    expect(link).toContain('1');

  });
});
