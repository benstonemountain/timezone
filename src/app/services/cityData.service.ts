import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { CityData } from '../model/models.interface';
import { Observable, catchError, forkJoin, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CityDataService {
  private apiNinjaBasicAPIUrl = environment.apiNinjaBasicAPIUrl;
  private apiNinjaGeocodingEndpoint = 'geocoding?city=';
  private apiNinjaAPIKey = 'YRn7R0wLb0Uw2DNWbgnOVzoriDEeX5P0qmKYmPGv';

  private countryCodeBasicApiUrl = environment.countryCodeApiUrl;

  constructor(private httpClient: HttpClient) {}

  fetchCityInfos(cityName: string) {
    console.log(cityName);
    const headers = new HttpHeaders({
      'X-Api-Key': this.apiNinjaAPIKey,
    });
    return this.httpClient.get<CityData[]>(
      `${this.apiNinjaBasicAPIUrl}${this.apiNinjaGeocodingEndpoint}${cityName}`,
      { headers }
    );
  }

  fetchCountryNames(countryCodes: string[]): Observable<{ [key: string]: string }> {
    const countryCodeApiHeaders = new HttpHeaders({
      'apikey': '1yolIKwrkx7bRrqJhzlOGpAQGsUGLrGl'
    });

    const requests = countryCodes.map(code => {
      const url = `${this.countryCodeBasicApiUrl}${code.toLowerCase()}`;
      console.log(`Fetching country name for code: ${code.toLowerCase()}`);
      return this.httpClient.get<{ name: string }[]>(url, { headers: countryCodeApiHeaders }).pipe(
        map(response => {
          console.log(`Response for code ${code}:`, response);
          return { [code]: response[0]?.name || 'Unknown' };
        }),
        catchError(error => {
          console.error(`Error fetching country name for code ${code}:`, error);
          return of({ [code]: 'Unknown' });
        })
      );
    });

    return forkJoin(requests).pipe(
      map(responses => responses.reduce((acc, cur) => ({ ...acc, ...cur }), {}))
    );
}
}
