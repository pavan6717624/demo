import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RedemptionDTO, SendCouponsRequest } from './takeoff/takeoff.component';
import { RedemptionHistory } from './redem-history/redem-history.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getNotification() {
    return this.http.get('https://take-app-4afe487d41cd.herokuapp.com/getNotification');  
  }
  getCoupon(formData: FormData) {
    return this.http.post('https://take-app-4afe487d41cd.herokuapp.com/getCoupon',formData);
  }
  sendRedemptionCode(formData: FormData) {
    return this.http.post('https://take-app-4afe487d41cd.herokuapp.com/sendRedemptionCode',formData);
  }
  updatePan(formData: FormData) {
    return this.http.post('https://take-app-4afe487d41cd.herokuapp.com/updatePan',formData);
  }

  updateKYC(formData: FormData) {
    return this.http.post('https://take-app-4afe487d41cd.herokuapp.com/updateKYC',formData);
  }
  
   downloadCoupon(formData: FormData) {
    return this.http.post('https://take-app-4afe487d41cd.herokuapp.com/downloadCoupon',formData);
  }
 
  async likeCoupon(formData: FormData) {
    return await this.http.post('https://take-app-4afe487d41cd.herokuapp.com/likeCoupon',formData).toPromise();;
  }

  async disLikeCoupon(formData: FormData) {
    return await this.http.post('https://take-app-4afe487d41cd.herokuapp.com/disLikeCoupon',formData).toPromise();;
  }

  getRedemptionHistory() {
    return this.http.get('https://take-app-4afe487d41cd.herokuapp.com/getRedemptionHistory');
  }

  
  customerRedemption(redemption: RedemptionDTO) {
    return this.http.post('https://take-app-4afe487d41cd.herokuapp.com/customerRedemption',redemption);
  }
  generateRedemption(redemption:RedemptionDTO) {
    return this.http.post('https://take-app-4afe487d41cd.herokuapp.com/generateRedemption',redemption);
  }

  getKYCDetails() {
    return this.http.get('https://take-app-4afe487d41cd.herokuapp.com/getKYCDetails');
  }

  downloadRedemHistory(redemptionHistory: RedemptionHistory[]) {
    return this.http.post('https://take-app-4afe487d41cd.herokuapp.com/downloadRedemHistory',redemptionHistory,{responseType: 'blob'});
  }



  constructor(private http: HttpClient) { }


 
  getCustomerAccountDetails(formData: FormData) {
    return this.http.post('https://take-app-4afe487d41cd.herokuapp.com/getCustomerAccountDetails',formData)
  }


  getTakeOffRecommendations(sendCouponsRequest: SendCouponsRequest) {
    return this.http.post('https://take-app-4afe487d41cd.herokuapp.com/getTakeOffRecommendations',sendCouponsRequest)
  }

  getComplimentaryCoupons(sendCouponsRequest: SendCouponsRequest) {
    return this.http.post('https://take-app-4afe487d41cd.herokuapp.com/getComplimentaryCoupons',sendCouponsRequest)
  }


  getFreeCoupons(sendCouponsRequest: SendCouponsRequest) {
    return this.http.post('https://take-app-4afe487d41cd.herokuapp.com/getFreeCoupons',sendCouponsRequest)
  }


  getDailyCoupons(sendCouponsRequest: SendCouponsRequest) {
    return this.http.post('https://take-app-4afe487d41cd.herokuapp.com/getDailyCoupons',sendCouponsRequest);
  }

  getLimitedCoupons(sendCouponsRequest: SendCouponsRequest) {
    return this.http.post('https://take-app-4afe487d41cd.herokuapp.com/getLimitedCoupons',sendCouponsRequest)
  }

  getRedeemableCoupons(sendCouponsRequest: SendCouponsRequest) {
    return this.http.post('https://take-app-4afe487d41cd.herokuapp.com/getRedeemableCoupons',sendCouponsRequest)
  }
  getDiscountCoupons(sendCouponsRequest: SendCouponsRequest) {
    return this.http.post('https://take-app-4afe487d41cd.herokuapp.com/getDiscountCoupons',sendCouponsRequest)
  }
  
}
