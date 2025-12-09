import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login';
import { RegisterComponent } from './auth/register/register';
import { ItemsList } from './shared/components/items-list/items-list';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [

 
  { path: '', component: ItemsList },

  
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  {
    path: 'add',
    loadComponent: () =>
      import('./item-form/item-form').then(m => m.ItemForm),
    canActivate: [authGuard]
  },

  
  {
    path: 'edit/:id',
    loadComponent: () =>
      import('./item-form/item-form').then(m => m.ItemForm),
    canActivate: [authGuard]
  },

 
  {
    path: 'item/:id',
    loadComponent: () =>
      import('./item-details/item-details').then(m => m.ItemDetails)
  }
];
