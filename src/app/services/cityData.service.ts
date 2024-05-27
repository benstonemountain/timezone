import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { CityData } from '../model/models.interface';


@Injectable({
  providedIn: 'root'
})
export class CityDataService {

  private apiNinjaBasicAPIUrl = environment.apiNinjaBasicAPIUrl;
  private apiNinjaGeocodingEndpoint = "geocoding?city=";
  private apiNinjaAPIKey = 'YRn7R0wLb0Uw2DNWbgnOVzoriDEeX5P0qmKYmPGv';



  constructor(private httpClient: HttpClient) { }

  fetchCityInfos(cityName: string) {
    console.log(cityName);
    const headers = new HttpHeaders({
      'X-Api-Key': this.apiNinjaAPIKey,
    });
    return this.httpClient.get<CityData[]>(`${this.apiNinjaBasicAPIUrl}${this.apiNinjaGeocodingEndpoint}${cityName}`, { headers });
  }


}
