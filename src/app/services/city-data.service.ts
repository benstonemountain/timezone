import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { CityData } from '../model/city-data';


@Injectable({
  providedIn: 'root'
})
export class CityDataService {

  private basicAPIUrl = environment.baseUrl;
  private endpoint = "geocoding?city=";
  private myAPIKey = 'YRn7R0wLb0Uw2DNWbgnOVzoriDEeX5P0qmKYmPGv';

  constructor(private httpClient: HttpClient) { }

  fetchCityInfos(cityName: string) {
    console.log(cityName);
    const headers = new HttpHeaders({
      'X-Api-Key': this.myAPIKey,
    });
    return this.httpClient.get<CityData[]>(`${this.basicAPIUrl}${this.endpoint}${cityName}`, { headers });
  }
}
