import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { MainPageComponent } from './main-page/main-page.component';



@NgModule({
  declarations: [BusquedaComponent, ResultadosComponent, MainPageComponent],
  imports: [
    CommonModule
  ]
})
export class WeatherModule { }
