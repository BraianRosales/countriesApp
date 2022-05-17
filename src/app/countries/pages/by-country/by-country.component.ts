import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.css'],
})
export class ByCountryComponent {
  constructor(private CountryService: CountryService) {}

  public textTerm: string = '';
  public thereIsAError: boolean = false;

  search() {
    if (this.textTerm.trim().length > 0) {
      this.thereIsAError = false;

      this.CountryService.searchCountry(this.textTerm).subscribe(
        (res) => {
          console.log(res);
        },
        (err) => {
          this.thereIsAError = true;
        }
      ),
        (this.textTerm = '');
    }
  }
}
