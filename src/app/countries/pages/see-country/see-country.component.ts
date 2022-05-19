import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-see-country',
  templateUrl: './see-country.component.html',
  styleUrls: ['./see-country.component.css'],
})
export class SeeCountryComponent implements OnInit {
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _countryService: CountryService
  ) {}

  ngOnInit(): void {
    this._activatedRoute.params
      .pipe(
        switchMap((param) =>
          this._countryService.searchViewCountry(param['id'])
        )
      )
      .subscribe((res) => {
        console.log(res[0]);
      });
      
    // this._activatedRoute.params.subscribe(({ id }) => {
    //   this._countryService.searchViewCountry(id).subscribe((country) => {
    //     console.log(country[0]);
    //   });
    // });
  }
}
