import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CityData } from '../../model/city-data';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrl: './city.component.css'
})
export class CityComponent {

  textByUser: string  = "";

  @Output() sendUserText = new EventEmitter<string>();
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

}
