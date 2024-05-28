import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, of, switchMap, tap } from 'rxjs';

import { CityData, WeatherInfo } from '../model/models.interface';
import { CityDataService } from './cityData.service';

@Injectable({
  providedIn: 'root'
})
export class CityStateService {


  private _cityInfos = new BehaviorSubject<CityData[] | null>(null);
  readonly cityInfos$ = this._cityInfos.asObservable();

  constructor(private cityDataService: CityDataService) { }

    // getCityInfos(city: string) {
    //   this.cityDataService.fetchCityInfos(city)
    //   .subscribe({
    //     next: (res) => {
    //       console.log(res);
    //       this._cityInfos.next(res);
    //     },
    //     error: (err) => {
    //       console.error(err);
    //       this._cityInfos.next(null);
    //     }
    //   })
    // }

    getCityInfos(city: string) {
      this.cityDataService.fetchCityInfos(city)
        .pipe(
          switchMap((cityData: CityData[]) => {
            if (cityData.length === 0) {
              return of([]);
            }
            const countryCodes = cityData.map(item => item.country);
            return this.cityDataService.fetchCountryNames(countryCodes).pipe(
              map(countryMap => {
                return cityData.map(item => ({
                  ...item,
                  country: countryMap[item.country] || 'Unknown'
                }));
              })
            );
          }),
          catchError((err) => {
            console.error('Error in getCityInfos:', err);
            this._cityInfos.next(null);
            return of([]);
          })
        )
        .subscribe((cityData: CityData[]) => {
          this._cityInfos.next(cityData);
        });
    }

}
