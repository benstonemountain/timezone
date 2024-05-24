import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CityData } from '../../model/models.interface';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrl: './city.component.css'
})
export class CityComponent {

  textByUser: string  = "";

  @Output() sendUserText = new EventEmitter<string>();
  @Output() sendLongAndLat = new EventEmitter<{long: number, lat: number}>();

  @Input() cityInfo: CityData[] | null = [];

  cityForm = this.formBuilder.group({
    cityControl: ['', [Validators.required]]
  });

  constructor(private formBuilder: FormBuilder) {}

  oncitySearch() {
    const {cityControl} = this.cityForm.value;
    if(cityControl) {
      //ha nem ír be semmit a user, nem fut le
      console.log(cityControl);
      this.sendUserText.emit(cityControl);
    }
     
  }

  onSendCoordination(longitude: number, latitude: number, ) {
    if(longitude && latitude) {
      const coord = {long: longitude, lat: latitude};
      this.sendLongAndLat.emit(coord);
    }
    
  }

}
