import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'currency',
    loadChildren: () =>
      import('@currency/currency-exchange.module').then(
        (m) => m.CurrencyExchangeModule
      ),
  },
];
