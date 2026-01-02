import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'orders', pathMatch: 'full' },

  {
    path: 'orders',
    loadComponent: () =>
      import('./orders/orders-list/orders-list')
        .then(c => c.OrdersListComponent)
  },

  {
    path: 'orders/new',
    loadComponent: () =>
      import('./orders/create-order/create-order')
        .then(c => c.CreateOrderComponent)
  }
];
