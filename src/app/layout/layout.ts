import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet],   // <- Підключаємо router-outlet
  templateUrl: './layout.html',
  styleUrls: ['./layout.css']
})
export class Layout {
  title = 'Travel App';
}
