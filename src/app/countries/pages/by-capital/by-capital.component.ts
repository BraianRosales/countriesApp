import { Component } from '@angular/core';
import { CountryResponse } from '../../interfaces/countryResponse.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styleUrls: ['./by-capital.component.css'],
})
export class ByCapitalComponent {
  constructor(private CountryService: CountryService) {}

  //las propiedades pueden ser mandadas a los componentes hijos por medio de los @input()
  public thereIsAError: boolean = false;
  public lsCountries: CountryResponse[] = [];
  public text: string = '';
  public errorText: string = '';
  public countriesSuggestions: CountryResponse[] = [];

  //los eventos son mandados del hijo al padre con un @Ouput.
  searchCapital(textInput: string) {
    this.text = textInput;
    if (this.text.trim().length > 0) {
      this.thereIsAError = false;
      this.CountryService.searchCapital(this.text).subscribe(
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
    this.lsCountries = [];
    this.thereIsAError = false;

    this.CountryService.searchCapital(txtPressKey).subscribe(
      (res) => (this.countriesSuggestions = res.splice(0, 5)),
      (err) => (this.countriesSuggestions = [])
    );
  }
}
