import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';

import { OrderService, Order } from '../../core/services/order';
import { materialModules } from '../../material';
import { CreateOrderComponent } from '../create-order/create-order';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-orders-list',
  standalone: true,
  imports: [...materialModules, NgClass],
  templateUrl: './orders-list.html',
})
export class OrdersListComponent implements OnInit {

  displayedColumns = ['customer', 'status', 'items', 'actions'];

  orders: Order[] = [];
  paged: Order[] = [];

  loading = true;

  pageIndex = 0;
  pageSize = 5;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private api: OrderService,
    private snack: MatSnackBar,
    private dialog: MatDialog,
    private cdr: ChangeDetectorRef

) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.loading = true;

    this.api.list().subscribe({
      next: data => {
        this.orders = data;
        this.applyPage();
        this.loading = false;
        this.cdr.detectChanges();   // 👈 force UI refresh

      },
      error: () => {
        this.snack.open('Could not load orders', 'Close', { duration: 3000 });
        this.loading = false;
      }
    });
  }

  applyPage() {
    const start = this.pageIndex * this.pageSize;
    this.paged = this.orders.slice(start, start + this.pageSize);
  }

  onPage(e: PageEvent) {
    this.pageIndex = e.pageIndex;
    this.pageSize = e.pageSize;
    this.applyPage();
  }

  markPaid(o: Order) {
    this.api.changeStatus(o.id, 'PAID').subscribe(() => {
      this.snack.open('Order marked as PAID', 'OK', { duration: 2500 });
      this.load();
    });
  }

  cancel(o: Order) {
    this.api.changeStatus(o.id, 'CANCELLED').subscribe(() => {
      this.snack.open('Order cancelled', 'OK', { duration: 2500 });
      this.load();
    });
  }

  openCreate() {
    this.dialog.open(CreateOrderComponent, { width: '520px' })
      .afterClosed()
      .subscribe(created => created && this.load());
  }
}
