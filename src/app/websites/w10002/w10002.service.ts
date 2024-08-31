import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderDetails } from './home/home.component';

@Injectable({
  providedIn: 'root'
})
export class W10002Service {

  constructor(private http: HttpClient) { }

  payment(order: OrderDetails) {
    return this.http.post('https://take-app-4afe487d41cd.herokuapp.com/payment',order);
  }
  
}
