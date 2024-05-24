import { Component, Input } from '@angular/core';
import { WeatherInfo } from '../../model/models.interface';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})

export class WeatherComponent {

  @Input() weatherInfo: WeatherInfo | null = null;

  convertWindSpeed(meterPerSec: number): number {
    //a m/s-ban megadott adatot km/h-vá alakítja
    return +(meterPerSec*3.6).toFixed(2);
  }

  getWindDirection(degree: number) {
    const directionExplanation = "";

  }

  

  getUtcOffsetString(timezoneOffset: number): string {
    const totalMinutes = timezoneOffset / 60;
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    const sign = hours >= 0 ? '+' : '-';
    const formattedHours = Math.abs(hours).toString().padStart(2, '0');
    const formattedMinutes = Math.abs(minutes).toString().padStart(2, '0');
    return `UTC${sign}${formattedHours}:${formattedMinutes}`;
  }

}
