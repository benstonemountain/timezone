import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WeatherInfo } from '../model/models.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {

  private basicApiUrl = environment.weatherApiUrl;
  private openWeatherApiKey = "2eca79207a882632be3d0a6c7b62492c";

  constructor(private httpClient: HttpClient) { }

  fetchWeatherInfo(coord: {long: number, lat: number }) {
    
    console.log(coord.long, coord.lat);

   return this.httpClient.get<WeatherInfo>(`${this.basicApiUrl}2.5/weather?lat=${coord.lat}&lon=${coord.long}&appid=${this.openWeatherApiKey}&units=metric`);
  }
}
