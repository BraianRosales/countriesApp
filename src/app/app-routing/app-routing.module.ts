import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ByCountryComponent } from '../countries/pages/by-country/by-country.component';
import { ByCapitalComponent } from '../countries/pages/by-capital/by-capital.component';
import { ByRegionComponent } from '../countries/pages/by-region/by-region.component';
import { SeeCountryComponent } from '../countries/pages/see-country/see-country.component';

const routes: Routes = [
  { path: '', component: ByCountryComponent, pathMatch: 'full' },
  { path: 'capital', component: ByCapitalComponent },
  { path: 'region', component: ByRegionComponent },
  { path: 'pais/:id', component: SeeCountryComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
