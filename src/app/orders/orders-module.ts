import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing-module';
import {OrdersListComponent} from './orders-list/orders-list';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CreateOrderComponent} from './create-order/create-order';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    OrdersRoutingModule,
    CreateOrderComponent,
    OrdersListComponent
  ]
})
export class OrdersModule { }
