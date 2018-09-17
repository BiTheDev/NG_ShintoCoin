import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service';
@Component({
  selector: 'app-mine-coin',
  templateUrl: './mine-coin.component.html',
  styleUrls: ['./mine-coin.component.css']
})
export class MineCoinComponent implements OnInit {
  constructor(private _httpService : ShintoService) { }
  Answer : Number = 2
  userInput : number;
  transcaction = { id : 0, type:"Mine", value: 0 , amount : 1 }
  ngOnInit() {
  }

  Question(){
   if(this.userInput == this.Answer){
    this.userInput = 0;
    this._httpService.AddMine();
    this._httpService.AddCoin(1);
    let randid = Math.floor(Math.random() * 9999);
    this.transcaction = { id : randid, type : "Mine", value : (this._httpService.Mines - 1),amount : 1 }
    this._httpService.addToTrans(this.transcaction)
    console.log(this._httpService.trans);
    this.transcaction = { id : 0, type:"Mine", value: 0, amount : 1 }
   }else{
    this.userInput = 0;
   }
  }
}
