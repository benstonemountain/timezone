import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { StateService } from '../../services/state.service';
import { CityData, WeatherInfo } from '../../model/models.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

  textFromUser: string = "";
  longitudeAndLatitudeFromUser!: { long: number, lat: number };

  cityInfosFromServer$!: Observable<CityData[] | null>;
  weatherInfoFromServer$!:Observable<WeatherInfo | null>;

  constructor( private stateService: StateService) {}

  handleUserText(cityName: string) {
    this.textFromUser = cityName
    this.stateService.getCityInfos(this.textFromUser);    
    this.cityInfosFromServer$ = this.stateService.cityInfos$;
  }

  handleCoordination(coordinations: { long: number, lat: number }) {
    this.longitudeAndLatitudeFromUser = coordinations;
    const {long, lat} = this.longitudeAndLatitudeFromUser;
    this.stateService.getWeatherData(long, lat);
    this.weatherInfoFromServer$ = this.stateService.weatherInfo$;
  }



}
