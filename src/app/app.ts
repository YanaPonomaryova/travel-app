import { Component } from '@angular/core';
import { Layout } from './layout/layout';
import { ItemsList } from './shared/components/items-list/items-list'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Layout, ItemsList],
  template: `<app-layout></app-layout> <app-items-list></app-items-list>` // додаємо селектор
})
export class App {}
