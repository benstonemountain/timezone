import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { CityData, WeatherInfo } from '../model/models.interface';
import { CityDataService } from './cityData.service';

@Injectable({
  providedIn: 'root'
})
export class CityStateService {


  private _cityInfos = new BehaviorSubject<CityData[] | null>(null);
  readonly cityInfos$ = this._cityInfos.asObservable();

  constructor(private cityDataService: CityDataService) { }

  getCityInfos(city: string) {
    this.cityDataService.fetchCityInfos(city)
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


}
