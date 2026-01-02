import { Routes, RouterModule } from '@angular/router';
import { OrdersListComponent } from './orders-list/orders-list';
import { CreateOrderComponent } from './create-order/create-order';
import {NgModule} from '@angular/core';

const routes: Routes = [
  { path: '', component: OrdersListComponent },
  { path: 'new', component: CreateOrderComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule {}
