import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiUrl: string = `https://restcountries.com/v3.1`;

  constructor(private Http: HttpClient) {}

  searchCountry(textTerm: string): Observable<any> {
    return this.Http.get(`${this.apiUrl}/name/${textTerm}`);
  }
}
