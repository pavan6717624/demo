import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { SubscriptionDTO } from './subscription.component';
@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  upgradeSubscription(updateSubscription:SubscriptionDTO) {
    return this.http.post('https://take-app-4afe487d41cd.herokuapp.com/upgradeSubscription',updateSubscription );
  }
  checkCustomerDetails(formData: FormData) {
    return this.http.post( 'https://take-app-4afe487d41cd.herokuapp.com/checkCustomerDetails',formData );
  }
    recordHits(formData: FormData) {
    return this.http.post( 'https://take-app-4afe487d41cd.herokuapp.com/recordHits',formData );
  }
  
  addContacts(formData: FormData) {
    return this.http.post( 'https://take-app-4afe487d41cd.herokuapp.com/addContacts',formData );
  }

  constructor(private http: HttpClient) { }


  getOrderId(): Observable<any>
  {
    //return this.http.get( 'https://take-app-4afe487d41cd.herokuapp.com/getOrderId' );
    return this.http.get( 'https://take-app-4afe487d41cd.herokuapp.com/getOrderId' );
  }

  async checkRefererId(formData: FormData): Promise<any>
  {//https:://takeoff-pavan.herokuapp.com
    // return await this.http.post( 'https://take-app-4afe487d41cd.herokuapp.com/checkRefererId',formData ).toPromise();
    return await this.http.post( 'https://take-app-4afe487d41cd.herokuapp.com/checkRefererId',formData ).toPromise();
  }
  
  getSubscription(subscription:SubscriptionDTO): Observable<any>
  {
  // return this.http.post('https://take-app-4afe487d41cd.herokuapp.com/subscribe',subscription );
    return this.http.post('https://take-app-4afe487d41cd.herokuapp.com/subscribe',subscription );
  }

}
