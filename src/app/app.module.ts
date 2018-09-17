import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MineCoinComponent } from './mine-coin/mine-coin.component';
import { BuyCoinComponent } from './buy-coin/buy-coin.component';
import { SellCoinComponent } from './sell-coin/sell-coin.component';
import { BrowseLedgerComponent } from './browse-ledger/browse-ledger.component';
import { HomeComponent } from './home/home.component';
import { ShintoService } from './shinto.service';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MineCoinComponent,
    BuyCoinComponent,
    SellCoinComponent,
    BrowseLedgerComponent,
    HomeComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ShintoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
