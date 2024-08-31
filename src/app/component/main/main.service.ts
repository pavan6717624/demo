import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  getLogos() {
    return this.http.get('https://take-app-4afe487d41cd.herokuapp.com/getLogos')
  }
  getHomePageCoupons() {
    return this.http.get('https://take-app-4afe487d41cd.herokuapp.com/getHomePageCoupons')
  }

  constructor(private http: HttpClient) { }

}
