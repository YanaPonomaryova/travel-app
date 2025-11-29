import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';
import { TripDataService } from '../services/data';

@Component({
  selector: 'app-item-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgIf],
  templateUrl: './item-form.html',
  styleUrls: ['./item-form.css']
})
export class ItemForm {

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    destination: new FormControl('', Validators.required),
    startDate: new FormControl('', Validators.required),
    endDate: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    imageUrl: new FormControl('', Validators.required)   
  });

  constructor(private tripService: TripDataService) {}

  onSubmit() {
  if (this.form.invalid) {
    this.form.markAllAsTouched();
    return;
  }

  this.tripService.addItem(this.form.value);


  this.tripService['tripsSubject'].next(this.tripService['trips']);

  alert('Елемент додано!');
}

}
