import { Component} from '@angular/core';
import { ResponseWeather } from '../interfaces/weather.interface';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent{

  get resultados(): ResponseWeather{
    return this.weatherService.resultados;
  }

  constructor( private weatherService: WeatherService ) { }


}
