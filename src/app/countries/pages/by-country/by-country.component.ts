import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { CountryResponse } from '../../interfaces/countryResponse.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.css'],
})
export class ByCountryComponent {
  constructor(private CountryService: CountryService) {}

  //las propiedades pueden ser mandadas a los componentes hijos por medio de los @input()
  public thereIsAError: boolean = false;
  public lsCountries: CountryResponse[] = [];
  public text: string = '';
  public errorText: string = '';
  public placeholder: string = '';

  //los eventos son mandados del hijo al padre con un @Ouput.
  search(textInput: string) {
    this.text = textInput;
    if (this.text.trim().length > 0) {
      this.thereIsAError = false;
      this.CountryService.searchCountry(this.text).subscribe(
        (res) => {
          this.lsCountries = res;
          if (this.lsCountries) {
          }
        },
        (err) => {
          this.thereIsAError = true;
        }
      ),
        (this.errorText = this.text);
    }
  }

  suggestions(txtPressKey: string) {
    this.thereIsAError = false;
    console.log(txtPressKey);
  }
}
