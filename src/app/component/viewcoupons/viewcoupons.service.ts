import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Coupon } from '../editcoupons/editcoupons.component';

@Injectable({
  providedIn: 'root'
})
export class ViewcouponsService {
  editCoupon(coupon: Coupon) {
    return this.http.post('https://take-app-4afe487d41cd.herokuapp.com/editCoupon', coupon);
  }

  constructor(private http: HttpClient) { }


  getCoupons(formData: FormData): Observable<any> {
    return this.http.post('https://take-app-4afe487d41cd.herokuapp.com/getCoupons', formData);

  }
}
