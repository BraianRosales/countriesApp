import { Component, Input, OnInit } from '@angular/core';
import { CountryResponse } from '../../interfaces/countryResponse.interface';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.css'],
})
export class CountryTableComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  //Estos componentes vienen del componente padre, que en este caso es by-Country.
  @Input() thereIsAErrorChild: boolean = false;
  @Input() lsCountriesChild: CountryResponse[] = [];
}
