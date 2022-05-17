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

  public thereIsAError: boolean = false;
  public thereAreCountries: boolean = false;
  public textTerm: string = '';
  public textError: string = '';
  public lsCountries: CountryResponse[] = [];

  search() {
    if (this.textTerm.trim().length > 0) {
      this.thereIsAError = false;
      this.CountryService.searchCountry(this.textTerm).subscribe(
        (res) => {
          console.log(res[0]);
          this.lsCountries = res;
          if (this.lsCountries) {
            this.thereAreCountries = true;
          }
          // localStorage.setItem('Paises encontrados', JSON.stringify(res));
        },
        (err) => {
          this.thereIsAError = true;
        }
      ),
        (this.textError = this.textTerm);
      this.textTerm = '';
    }
  }
}
