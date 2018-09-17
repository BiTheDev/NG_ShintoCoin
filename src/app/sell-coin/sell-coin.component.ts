import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service';
@Component({
  selector: 'app-sell-coin',
  templateUrl: './sell-coin.component.html',
  styleUrls: ['./sell-coin.component.css']
})
export class SellCoinComponent implements OnInit {

  constructor(private _httpService : ShintoService) { }
  coin : number;
  transcaction = { id : 0, type:"Sell", value: 0 , amount : 1 }
  value :number = this._httpService.Mines;
  owned : number = this._httpService.TotalCoins;
  ngOnInit() {
    this.value;
    this.owned
  }
  Sell(){
    if(this.owned > 0 && this._httpService.Mines > 0){
      let obs = this._httpService.SellMine()
      this.value = obs;
      let obs2 = this._httpService.minusCoin(this.coin);
      this.owned = obs2;
      this.transcaction = { id : 0, type:"Sell", value: this.value , amount : this.coin }
      this._httpService.addToTrans(this.transcaction)
      console.log(this.transcaction);
    }
  }

}
