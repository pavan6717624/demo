import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coupon, SendImagesRequest } from './editcoupons.component';
@Injectable({
  providedIn: 'root'
})
export class EditcouponsService {
  deleteImage(formData: FormData) {
    return this.http.post('https://takeoff-angular.herokuapp.com/deleteImage', formData);
  }

  constructor(private http: HttpClient) { }



  getImages(sendImagesRequest: SendImagesRequest): Observable<any> {
    return this.http.post('https://takeoff-angular.herokuapp.com/getImages', sendImagesRequest);

  }

  getLogo(formData: FormData): Observable<any> {
    return this.http.post('https://takeoff-angular.herokuapp.com/getLogo', formData);

  }

  getCouponTypes(): Observable<any> {
    return this.http.get('https://takeoff-angular.herokuapp.com/getCouponTypes');

  }

  getAllCouponTypes(): Observable<any> {
    return this.http.get('https://takeoff-angular.herokuapp.com/getAllCouponTypes');

  }

  saveCoupon(coupon: Coupon): Observable<any> {
    return this.http.post('https://takeoff-angular.herokuapp.com/saveCoupon', coupon);

  }
}
