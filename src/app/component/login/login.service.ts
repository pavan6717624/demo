import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  forgetPassword(formData: FormData) {
    return this.http.post('https://take-app-4afe487d41cd.herokuapp.com/forgetPassword',formData)
  }
  checkPasswordOTP(formData: FormData) {
    return this.http.post('https://take-app-4afe487d41cd.herokuapp.com/checkPasswordOTP',formData)
  }
  generateMailPasscode(formData: FormData) {
    return this.http.post('https://take-app-4afe487d41cd.herokuapp.com/generateMailPasscode',formData)
  }
  getLoginDetails() {
    return this.http.get('https://take-app-4afe487d41cd.herokuapp.com/getLoginDetails')
  }

  constructor(private http: HttpClient) { }

login(formData: FormData)
{
 // return this.http.post( 'https://take-app-4afe487d41cd.herokuapp.com/login',formData );
  return this.http.post('https://take-app-4afe487d41cd.herokuapp.com/login',formData)
}

}
