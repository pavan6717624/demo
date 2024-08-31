import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VendoraccountService {
  changePassword(formData: FormData) {
    return this.http.post("https://take-app-4afe487d41cd.herokuapp.com/changePassword",formData);
  }
 
 
 
  uploadLogo(formData: FormData): Observable<any> {
    return this.http.post("https://take-app-4afe487d41cd.herokuapp.com/uploadLogo",formData);
  }


  constructor(private http: HttpClient) { }

  getVendorDetails(formData: FormData): Observable<any>
  {
    return this.http.post("https://take-app-4afe487d41cd.herokuapp.com/getVendorDetails",formData);
  }

  getDesignerDetails(formData: FormData): Observable<any>
  {
    return this.http.post("https://take-app-4afe487d41cd.herokuapp.com/getDesignerDetails",formData);
  }

}
