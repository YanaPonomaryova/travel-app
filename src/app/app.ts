import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Layout } from './layout/layout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Layout, RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {}
