import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CityStateService } from '../../services/cityState.service';
import { CityData, WeatherInfo } from '../../model/models.interface';
import { WeatherStateService } from '../../services/weatherState.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  cityInfosFromServer$!: Observable<CityData[] | null>;
  weatherInfoFromServer$!: Observable<WeatherInfo | null>;

  constructor(private cityStateService: CityStateService, private weatherStateService: WeatherStateService) {}

  ngOnInit() {
    this.cityInfosFromServer$ = this.cityStateService.cityInfos$;
    this.weatherInfoFromServer$ = this.weatherStateService.weatherInfo$;
  }

  handleCitySearch(cityName: string) {
    this.cityStateService.getCityInfos(cityName);
  }

  handleCoordination(coordinations: { long: number; lat: number }) {
    this.weatherStateService.getWeatherData(coordinations);
  }
}
