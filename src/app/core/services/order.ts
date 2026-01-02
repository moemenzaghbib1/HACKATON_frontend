import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';

export interface OrderItem {
  productId: string;
  quantity: number;
}

export interface Order {
  id: string;
  customerName: string;
  items: OrderItem[];
  status: 'CREATED' | 'PAID' | 'CANCELLED';
}

export interface CreateOrderRequest {
  customerName: string;
  items: OrderItem[];
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private base = `${environment.apiUrl}/orders`;

  constructor(private http: HttpClient) {}

  list(): Observable<Order[]> {
    return this.http.get<Order[]>(this.base);
  }

  create(data: CreateOrderRequest): Observable<Order> {
    return this.http.post<Order>(this.base, data);
  }

  changeStatus(id: string, status: string): Observable<Order> {
    return this.http.patch<Order>(`${this.base}/${id}/status`, null, {
      params: { status }
    });
  }

  getById(id: string): Observable<Order> {
    return this.http.get<Order>(`${this.base}/${id}`);
  }
}
