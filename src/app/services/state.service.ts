import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { CityData, WeatherInfo } from '../model/models.interface';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class StateService {


  private _cityInfos = new BehaviorSubject<CityData[] | null>(null);
  readonly cityInfos$ = this._cityInfos.asObservable();

  private weatherInfo = new BehaviorSubject<WeatherInfo | null>(null);
  readonly weatherInfo$ = this.weatherInfo.asObservable();

  constructor(private dataService: DataService) { }

  getCityInfos(city: string) {
    this.dataService.fetchCityInfos(city)
    .subscribe({
      next: (res) => {
        console.log(res);
        this._cityInfos.next(res);
      },
      error: (err) => {
        console.error(err);
        this._cityInfos.next(null);
      }
    })

  }

  getWeatherData(coord: {long: number, lat: number }) {
      this.dataService.fetchWeatherInfo(coord) 
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
