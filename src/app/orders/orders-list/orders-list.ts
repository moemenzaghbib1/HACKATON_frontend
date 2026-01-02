import { Component, OnInit } from '@angular/core';
import { OrderService, Order } from '../../core/services/order';
import {RouterLink} from '@angular/router';
import {finalize} from 'rxjs';

@Component({
  selector: 'app-orders-list',
  imports: [
    RouterLink
  ],
  templateUrl: './orders-list.html'
})
export class OrdersListComponent implements OnInit {

  orders: Order[] = [];
  loading = true;

  constructor(private ordersService: OrderService) {}

  ngOnInit(): void {
    this.ordersService
      .list()
      .pipe(
        finalize(() => (this.loading = false))
      )
      .subscribe({
        next: (data: Order[]) => {
          this.orders = data;
        },
        error: (err) => {
          console.error('Failed to load orders', err);
        }
      });
  }


  load() {
    this.loading = true;
    this.ordersService.list().subscribe({
      next: data => {
        this.orders = data;
        this.loading = false;
      },
      error: err => {
        console.error('Failed to load orders', err);
        this.loading = false;
      }
    });
  }

  markPaid(o: Order) {
    this.ordersService.changeStatus(o.id, 'PAID')
      .subscribe(() => this.load());
  }

  cancel(o: Order) {
    this.ordersService.changeStatus(o.id, 'CANCELLED')
      .subscribe(() => this.load());
  }
}
