import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CurrencyExchangeService } from '@currency/services/currency-exchange.service';
import { lastValueFrom } from 'rxjs';
import { Currency, Country } from '@currency/interfaces/currency-exchange';
@Component({
  selector: 'app-currency-exchange',
  standalone: false,
  templateUrl: './currency-exchange.component.html',
  styleUrl: './currency-exchange.component.scss',
})
export class CurrencyExchangeComponent {
  formReady: FormGroup;
  cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
  ];
  ratesData: Currency[] = [];
  result: number;
  constructor(
    private formBuilder: FormBuilder,
    private api: CurrencyExchangeService
  ) {
    this.createForm();
  }
  createForm() {
    this.formReady = this.formBuilder.group({
      amount: ['', Validators.required],
      from: ['', Validators.required],
      to: ['', Validators.required],
    });
  }
  ngOnInit() {
    this.getRates();
  }
  getCountries() {
    lastValueFrom(this.api.getCountry()).then((res: any) => {
      res.forEach((country: any) => {
        let name = Object.keys(country.currencies)[0];
        let index = this.ratesData.findIndex(
          (element: any) => element.name == name
        );
        if (index != -1)
          this.ratesData[index] = {
            ...this.ratesData[index],
            full_name: country.currencies[name].name,
            symbol: country.currencies[name].symbol,
          };
      });
      console.log(this.ratesData);
    });
  }
  getRates() {
    lastValueFrom(this.api.getRate()).then((res: any) => {
      let datas: Currency[] = [];
      let dataRates = res.rates;
      for (let key in dataRates) {
        let value = dataRates[key];
        let currency = { rate: value, full_name: '', name: key, symbol: '' };
        datas.push(currency);
      }
      this.ratesData = datas;
      this.getCountries();
    });
  }
  convert() {
    console.log(this.formReady.value);
    let val = this.formReady.value;
    let baseRate = val.to.rate / val.from.rate;
    this.result = baseRate * val.amount;
  }
  getRate(e: number) {
    let val = this.formReady.value;
    return (e / val.from.rate).toFixed(6);
  }
  getResult(e: number) {
    let val = this.formReady.value;
    let baseRate = e / val.from.rate;
    return (baseRate * val.amount).toFixed(5);
  }
}
