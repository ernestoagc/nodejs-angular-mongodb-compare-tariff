import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import {APP_ROUTES} from './app.routes';
import { NavbarComponent } from './shared/navbar/navbar.component'
import { ApiService } from './services/api.service';
import {ValidationInterceptor} from './interceptor/validation.interceptor';
import { CardPriceComponent } from './pages/tariff/card-price/card-price.component';
import { TariffComponent } from './pages/tariff/tariff.component';
import { DetailComponent } from './pages/tariff/detail/detail.component';
import { PurchaseComponent } from './pages/tariff/purchase/purchase.component';
import { ProductCounterComponent } from './pages/tariff/product-counter/product-counter.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardPriceComponent,
    TariffComponent,
    DetailComponent,
    PurchaseComponent,
    ProductCounterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    APP_ROUTES
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ValidationInterceptor,
      multi: true
    },
    ApiService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
