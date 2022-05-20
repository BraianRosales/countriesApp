import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { CountryResponse } from '../../interfaces/countryResponse.interface';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styleUrls: ['./by-region.component.css'],
})
export class ByRegionComponent implements OnInit {
  public regions: string[] = [
    'africa',
    'americas',
    'asia',
    'europe',
    'oceania',
  ];

  public regionActivated: string = '';
  public thereIsAError: boolean = false;
  public lsCountries: CountryResponse[] = [];
  public errorText: string = '';

  constructor(private _countryService: CountryService) {}

  ngOnInit(): void {}

  public activateRegion(region: string) {
    this.regionActivated = region;
    console.log(this.regionActivated);
    if (this.regionActivated.trim().length > 0) {
      this.thereIsAError = false;
      this._countryService.searchRegion(this.regionActivated).subscribe(
        (res) => {
          this.lsCountries = res;
          if (this.lsCountries) {
          }
        },
        (err) => {
          this.thereIsAError = true;
        }
      ),
        (this.errorText = this.regionActivated);
    }
  }

  getChangesBtn(region: string): string {
    return region === this.regionActivated
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }

  suggestions(txtPressKey: string) {
    this.thereIsAError = false;
    console.log(txtPressKey);
  }
}
