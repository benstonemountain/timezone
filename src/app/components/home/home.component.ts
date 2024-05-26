import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { StateService } from '../../services/state.service';
import { CityData, WeatherInfo } from '../../model/models.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  cityInfosFromServer$!: Observable<CityData[] | null>;
  weatherInfoFromServer$!: Observable<WeatherInfo | null>;

  constructor(private stateService: StateService) {}

  ngOnInit() {
    this.cityInfosFromServer$ = this.stateService.cityInfos$;
    this.weatherInfoFromServer$ = this.stateService.weatherInfo$;
  }

  handleCitySearch(cityName: string) {
    this.stateService.getCityInfos(cityName);
  }

  handleCoordination(coordinations: { long: number; lat: number }) {
    this.stateService.getWeatherData(coordinations);
  }
}
