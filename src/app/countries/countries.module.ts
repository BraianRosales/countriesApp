import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { SeeCountryComponent } from './pages/see-country/see-country.component';

@NgModule({
  declarations: [
    ByCapitalComponent,
    ByRegionComponent,
    ByCountryComponent,
    SeeCountryComponent,
  ],
  imports: [CommonModule],
  exports: [
    ByCapitalComponent,
    ByRegionComponent,
    ByCountryComponent,
    SeeCountryComponent,
  ],
})
export class CountriesModule {}
