import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, Footer],
  templateUrl: './layout.html',
  styleUrls: ['./layout.css']
})
export class Layout {}
