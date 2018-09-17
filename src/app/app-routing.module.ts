import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MineCoinComponent } from './mine-coin/mine-coin.component';
import { BuyCoinComponent } from './buy-coin/buy-coin.component';
import { SellCoinComponent } from './sell-coin/sell-coin.component';
import { BrowseLedgerComponent } from './browse-ledger/browse-ledger.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
const routes: Routes = [
  {path : 'MineCoin', component : MineCoinComponent},
  {path : 'BuyCoin', component : BuyCoinComponent},
  {path : 'SellCoin', component : SellCoinComponent},
  {path : 'Browse Ledger', component : BrowseLedgerComponent},
  {path: "transaction/:id",component :DetailComponent},
  {path : '', component : HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
