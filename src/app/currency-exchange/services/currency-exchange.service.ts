import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class CurrencyExchangeService {
  constructor(private httpClient: HttpClient) {}
  getCountry() {
    return this.httpClient.get(
      'https://restcountries.com/v3.1/all?fields=currencies'
    );
  }
  getRate() {
    return this.httpClient.get('https://open.er-api.com/v6/latest/USD');
  }
}
