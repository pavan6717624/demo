import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class VendorService {
  
  getExecutiveCustomerAccountDetails() {
    return this.http.get('https://take-app-4afe487d41cd.herokuapp.com/getExecutiveCustomerAccountDetails');
  }
  
  updateScanCode(formData: FormData) {
    return this.http.post('https://take-app-4afe487d41cd.herokuapp.com/updateScanCode',formData);
  }

  beforeUpload(formData: FormData) : Observable<any> {

    return this.http.post('https://take-app-4afe487d41cd.herokuapp.com/getImage',formData);
   
  }

  beforeUploadStatement(formData: FormData) : Observable<any> {

    return this.http.post('https://take-app-4afe487d41cd.herokuapp.com/getImageStatement',formData);
   
  }


  upload(formData: FormData) : Observable<any> {

    return this.http.post('https://take-app-4afe487d41cd.herokuapp.com/uploadCoupon',formData);
   
  }
  
    getInvestorCustomerAccountDetails(): Observable<any> 
  {
  return this.http.get('https://take-app-4afe487d41cd.herokuapp.com/getInvestorCustomerAccountDetails');
  }


  constructor(private http: HttpClient) { }
}
