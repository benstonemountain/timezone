import { Component } from '@angular/core';
import { CityDataService } from '../../services/city-data.service';
import { Observable } from 'rxjs';
import { CityStateService } from '../../services/city-state.service';
import { CityData } from '../../model/city-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

  textFromUser: string = "";
  cityInfosFromServer$!: Observable<CityData[] | null>;

  constructor(private cityDataService: CityDataService, private cityStateService: CityStateService) {}

  handleUserText(cityName: string) {
    this.textFromUser = cityName
    console.log(this.textFromUser);
    this.cityStateService.getCityInfos(this.textFromUser);    
    this.cityInfosFromServer$ = this.cityStateService.cityInfos$;
    
  }

}
