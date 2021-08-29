import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


import { weatherEnv, ResponseWeather } from '../interfaces/weather.interface'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private servicioURL: string = 'https://api.openweathermap.org/data/2.5'
  private apiKey: string;

  public inputCity: string;
  public inputCoutryCode: string;
  public resultados: ResponseWeather;

  constructor( private http: HttpClient ) {
    this.apiKey = weatherEnv.API_KEY;
    //this.servicioURL = `${this.servicioURL}/weather?&appid=${this.apiKey}&units=metric&q=`;

    //this.inputCity = JSON.parse(localStorage.getItem('cityName')) || "";
    //this.inputCoutryCode = JSON.parse(localStorage.getItem('countryCode')) || "";
    this.resultados = JSON.parse(localStorage.getItem('resultados')) || false;

   }

   GetWeather(cityName: string, countryCode: string): any{

    //localStorage.setItem('cityName', JSON.stringify(this.inputCity));
    //localStorage.setItem('countryCode', JSON.stringify(this.inputCoutryCode));
    const query = `${cityName},${countryCode}`;

    const params = new HttpParams()
    .set('q', query)
    .set('units', 'metric')
    .set('appid', this.apiKey);
     

    this.http.get<ResponseWeather>(`${this.servicioURL}/weather`, {params})
     .subscribe((resp) =>{
       this.resultados = resp;
       //console.log(this.resultados);
       localStorage.setItem('resultados', JSON.stringify(this.resultados));
     }, err => {
       console.log(err);
     })
  }


}
