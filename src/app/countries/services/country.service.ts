import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CountryResponse } from '../interfaces/countryResponse.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiUrl: string = `https://restcountries.com/v3.1`;

  constructor(private Http: HttpClient) {}

  //CountryResponse es una interface creada basada por una petición con quicktype.
  searchCountry(textTerm: string): Observable<CountryResponse[]> {
    return this.Http.get<CountryResponse[]>(`${this.apiUrl}/name/${textTerm}`);
  }
}
