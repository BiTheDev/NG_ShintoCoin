import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service';
@Component({
  selector: 'app-buy-coin',
  templateUrl: './buy-coin.component.html',
  styleUrls: ['./buy-coin.component.css']
})
export class BuyCoinComponent implements OnInit {

  constructor(private _httpService : ShintoService) { }
  value :number = this._httpService.Mines;
  coin: number;
  owned : number = this._httpService.TotalCoins;
  transaction = { id : 0, type:"Buy", value: 0 , amount : 0 }
  ngOnInit() {
    this.value;
    this.owned;
  }
  ngOnChanges(){
    this.owned;
  }
  AddMine(){
    console.log("buying"); 
    if(this.coin > 0 || this.value > 0){
    let obs = this._httpService.AddMine();
    this.value = obs;
    let obs2 = this._httpService.AddCoin(this.coin);
    this.owned = obs2;
    let randid = Math.floor(Math.random() * 9999);
    this.transaction = { id : randid, type:"Buy", value: (this.value -1 ) , amount : this.coin }
    this._httpService.addToTrans(this.transaction)
    console.log(this.transaction);
    this.transaction = { id : 0, type:"Buy", value: 0 , amount : 0 }

    }
    
  }
}
