import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { configEnv } from '../config/config.env';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  public URI: string;
  public apiKey: string;

  constructor( private http: HttpClient) {
    this.apiKey = configEnv.API_KEY;
    this.URI = `https://api.openweathermap.org/data/2.5/weather?&appid=${this.apiKey}&units=metric&q=`;
   }

   GetWeather(cityName: string, countryCode: string): Observable<any>{
     return this.http.get(`${this.URI}${cityName},${countryCode}`);
   }

}
