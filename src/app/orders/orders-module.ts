import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    CreateOrderComponent,
    OrdersListComponent
  ]
})
export class OrdersModule { }
