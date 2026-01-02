import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {CreateOrderRequest, OrderService} from '../../core/services/order';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.html',
  imports: [CommonModule, FormsModule]
})
export class CreateOrderComponent {

  model: CreateOrderRequest = {
    customerName: '',
    items: [
      { productId: '', quantity: 1 }
    ]
  };

  constructor(private service: OrderService,
              private router: Router) {}

  addItem() {
    this.model.items.push({ productId: '', quantity: 1 });
  }

  removeItem(i: number) {
    this.model.items.splice(i, 1);
  }

  submit() {
    this.service.create(this.model).subscribe(() => {
      this.router.navigate(['/orders']);
    });
  }
}
