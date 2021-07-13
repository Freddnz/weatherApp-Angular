import { Component, OnInit } from '@angular/core';
import { WeatherService } from './service/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public weather;

  constructor( private weatherService: WeatherService ){

  }

  ngOnInit(): void{
    return console.log('Pagina cargada exitosamente!!!');
  }

  GetWeatherCity(cityName: string, countryCode: string): void{
    this.weatherService.GetWeather(cityName, countryCode)
      .subscribe(
        res => {
          console.log(res);
          this.weather = res;
        },
        err => console.log(err),
      );
  }

  submitLocation(cityName: HTMLInputElement, countryCode: HTMLInputElement): boolean{
    if (cityName.value && countryCode.value){
      this.GetWeatherCity(cityName.value, countryCode.value);
      cityName.value = '';
      countryCode.value = '';
    }else{
      alert('Please insert some value');
    }

    cityName.focus();

    return false;
  }
}
