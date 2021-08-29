import { Component } from '@angular/core';
import { InputWeather } from '../interfaces/weather.interface'
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  data: InputWeather = {
    cityName : '',
    countryCode: ''
  };

  constructor( private weatherService: WeatherService ) { }

  submitLocation(){
    if(this.data.cityName.trim().length === 0 || this.data.countryCode.trim().length === 0 ){
      alert('Debes ingresar todos los parametros!!!');
      return
    }

    this.weatherService.GetWeather(this.data.cityName, this.data.countryCode);
    this.data.cityName= '';
    this.data.countryCode='';

  }

}
