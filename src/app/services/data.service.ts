import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { CityData, WeatherInfo } from '../model/models.interface';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private basicAPIUrl = environment.baseUrl;
  private endpoint = "geocoding?city=";
  private myAPIKey = 'YRn7R0wLb0Uw2DNWbgnOVzoriDEeX5P0qmKYmPGv';

  private openWeatherApiKey = "2eca79207a882632be3d0a6c7b62492c";

  constructor(private httpClient: HttpClient) { }

  fetchCityInfos(cityName: string) {
    console.log(cityName);
    const headers = new HttpHeaders({
      'X-Api-Key': this.myAPIKey,
    });
    return this.httpClient.get<CityData[]>(`${this.basicAPIUrl}${this.endpoint}${cityName}`, { headers });
  }

  fetchWeatherInfo(coord: {long: number, lat: number }) {
    
    console.log(coord.long, coord.lat);

   return this.httpClient.get<WeatherInfo>(`https://api.openweathermap.org/data/2.5/weather?lat=${coord.lat}&lon=${coord.long}&appid=${this.openWeatherApiKey}&units=metric&lang=hu`);
  }
}
