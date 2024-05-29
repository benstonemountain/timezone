import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, catchError, map, of, switchMap, tap } from 'rxjs';

import { CityData, WeatherInfo } from '../model/models.interface';
import { CityDataService } from './cityData.service';

@Injectable({
  providedIn: 'root'
})
export class CityStateService {


  private _cityInfos = new BehaviorSubject<CityData[] | null>(null);
  readonly cityInfos$ = this._cityInfos.asObservable();

  private _loadingSubject = new Subject<boolean>();
  readonly loading$ = this._loadingSubject.asObservable();


  constructor(private cityDataService: CityDataService) { }

 
    getCityInfos(city: string) {
      this._loadingSubject.next(true);
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
          this._loadingSubject.next(false);
        });
    }

}
