import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
  ValidatorFn,
  AbstractControl
} from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';
import { TripDataService } from '../services/data';

export const dateRangeValidator: ValidatorFn = (control: AbstractControl) => {
  const start = control.get('startDate')?.value;
  const end = control.get('endDate')?.value;

  if (!start || !end) return null;

  return new Date(end) < new Date(start)
    ? { dateRange: true }
    : null;
};

@Component({
  selector: 'app-item-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgIf],
  templateUrl: './item-form.html',
  styleUrls: ['./item-form.css']
})
export class ItemForm {

  form = new FormGroup(
    {
      name: new FormControl('', Validators.required),
      destination: new FormControl('', Validators.required),
      startDate: new FormControl('', Validators.required),
      endDate: new FormControl('', Validators.required),
      price: new FormControl('', [
        Validators.required,
        Validators.min(1)
      ]),
      description: new FormControl('', Validators.required),
      imageUrl: new FormControl('', [
        Validators.required,
        Validators.pattern(/^https?:\/\/.+/)
      ])
    },
    { validators: dateRangeValidator }
  );

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
