import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityService {
 
  constructor(private http: HttpClient) { }
 
  getUser(city:any,metric:any): Observable<any> {
    let url = `https://api.openweathermap.org/data/2.5/weather?id=${city}&units=${metric}&APPID=72cbd577c353399616883e5b1789305a`;
    return this.http.get<any>(url);
  }
}
