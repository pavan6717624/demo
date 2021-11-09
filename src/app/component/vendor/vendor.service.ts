import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class VendorService {
  updateScanCode(formData: FormData) {
    return this.http.post('https://takeoff-pavan.herokuapp.com/updateScanCode',formData);
  }

  beforeUpload(formData: FormData) : Observable<any> {

    return this.http.post('https://takeoff-pavan.herokuapp.com/getImage',formData);
   
  }

  beforeUploadStatement(formData: FormData) : Observable<any> {

    return this.http.post('https://takeoff-pavan.herokuapp.com/getImageStatement',formData);
   
  }


  upload(formData: FormData) : Observable<any> {

    return this.http.post('https://takeoff-pavan.herokuapp.com/uploadCoupon',formData);
   
  }

  constructor(private http: HttpClient) { }
}
