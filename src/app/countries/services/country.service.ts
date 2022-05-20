import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CountryResponse } from '../interfaces/countryResponse.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiUrl: string = `https://restcountries.com/v3.1`;

  constructor(private _http: HttpClient) {}

  //CountryResponse es una interface creada basada por una petición con quicktype.
  searchCountry(textInput: string): Observable<CountryResponse[]> {
    return this._http.get<CountryResponse[]>(
      `${this.apiUrl}/name/${textInput}`
    );
  }

  searchCapital(textInput: string): Observable<CountryResponse[]> {
    return this._http.get<CountryResponse[]>(
      `${this.apiUrl}/capital/${textInput}`
    );
  }

  searchViewCountry(id: string): Observable<CountryResponse[]> {
    return this._http.get<CountryResponse[]>(`${this.apiUrl}/alpha/${id}`);
  }

  searchRegion(textBtn: string): Observable<CountryResponse[]> {
    return this._http.get<CountryResponse[]>(
      `${this.apiUrl}/region/${textBtn}`
    );
  }
}
