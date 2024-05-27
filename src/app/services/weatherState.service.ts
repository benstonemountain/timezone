import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { WeatherInfo } from '../model/models.interface';
import { WeatherDataService } from './weatherData.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherStateService {

  private weatherInfo = new BehaviorSubject<WeatherInfo | null>(null);
  readonly weatherInfo$ = this.weatherInfo.asObservable();

  constructor(private weatherDataService: WeatherDataService) { }

  getWeatherData(coord: {long: number, lat: number }) {
    this.weatherDataService.fetchWeatherInfo(coord)
    .subscribe({
      next: (res) => {
        console.log(res);
        this.weatherInfo.next(res);
      },
      error: (err) => {
        console.error(err);
      }
    })
}
}
