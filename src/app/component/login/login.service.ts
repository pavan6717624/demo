import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

login(formData: FormData): Observable<any>
{
 // return this.http.post( 'https://takeoff-pavan.herokuapp.com//login',formData );
  return this.http.post('https://takeoff-pavan.herokuapp.com//login',formData)
}

}
