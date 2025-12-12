import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TripDataService } from './data';
import { Trip } from '../shared/models/trip.model';

describe('TripDataService', () => {
  let service: TripDataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TripDataService]
    });

    service = TestBed.inject(TripDataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create new Trip and send POST request', () => {
    const inputData = {
      name: 'Paris',
      destination: 'France',
      startDate: '2025-01-01',
      endDate: '2025-01-10',
      price: '1500',
      description: 'Romantic trip',
      imageUrl: 'img.jpg'
    };

    const expectedTrip: Trip = {
      id: 0,
      name: 'Paris',
      destination: 'France',
      startDate: '2025-01-01',
      endDate: '2025-01-10',
      price: 1500,
      description: 'Romantic trip',
      imageUrl: 'img.jpg',
      isSpecial: false
    };

    service.addItem(inputData).subscribe(result => {
      expect(result).toEqual(expectedTrip);
    });

    const req = httpMock.expectOne('/trips');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(expectedTrip);

    req.flush(expectedTrip);
  });
});
