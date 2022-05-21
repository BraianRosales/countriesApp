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

  //Las propiedades pueden ser mandadas a los componentes hijos por medio de los @input()
  public thereIsAError: boolean = false;
  public lsCountries: CountryResponse[] = [];
  public text: string = '';
  public errorText: string = '';
  public countriesSuggestions: CountryResponse[] = [];

  //Los eventos son mandados del hijo al padre con un @Ouput.
  search(textInput: string) {
    this.text = textInput;
    if (this.text.trim().length > 0) {
      this.thereIsAError = false;
      this.CountryService.searchCountry(this.text).subscribe(
        (res) => {
          this.lsCountries = res;
        },
        (err) => {
          this.thereIsAError = true;
        }
      ),
        (this.errorText = this.text);
    }
  }

  suggestions(txtPressKey: string) {
    this.lsCountries = [];
    this.thereIsAError = false;

    this.CountryService.searchCountry(txtPressKey).subscribe(
      (res) => {
        this.countriesSuggestions = res.splice(0, 10);
      },
      (err) => {
        this.thereIsAError = true;
        this.errorText = txtPressKey;
        this.countriesSuggestions = [];
      }
    );
  }
}
