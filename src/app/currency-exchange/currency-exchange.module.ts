import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { CurrencyExchangeRoutingModule } from './currency-exchange-routing.module';
import { CurrencyExchangeComponent } from './pages/currency-exchange.component';

@NgModule({
  declarations: [CurrencyExchangeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CardModule,
    ButtonModule,
    SelectModule,
    InputNumberModule,
    InputTextModule,
    TableModule,
    InputIconModule,
    IconFieldModule,
    CurrencyExchangeRoutingModule,
  ],
})
export class CurrencyExchangeModule {}
