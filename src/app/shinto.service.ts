import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShintoService {
  Mines : number = 1;
  trans = [];
  TotalCoins : number = 0;
  current ;
  constructor() { 
  }
  AddMine(){
    this.Mines ++;
    console.log(this.Mines);
    return this.Mines;
  }
  SellMine(){
    this.Mines --;
    console.log(this.Mines);
    return this.Mines;  
  }
  AddCoin(num){
    this.TotalCoins += num;
    console.log(this.TotalCoins);
    return this.TotalCoins
    
  }
  minusCoin(num){
    this.TotalCoins -= num;
    console.log(this.TotalCoins);
    return this.TotalCoins
  }
  addToTrans(trans){
    this.trans.push(trans);
    console.log(this.trans);
    return this.trans
  }
  getTrans(id){
    for(let i =0; i<this.trans.length; i++){
      console.log(this.trans[i]);
      if(this.trans[i]['id'] == id){
        this.current = this.trans;
        return this.current;
        
      }
    }
  }
  }

