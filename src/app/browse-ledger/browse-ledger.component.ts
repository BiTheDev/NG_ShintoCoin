import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service';

@Component({
  selector: 'app-browse-ledger',
  templateUrl: './browse-ledger.component.html',
  styleUrls: ['./browse-ledger.component.css']
})
export class BrowseLedgerComponent implements OnInit {
  all;
  constructor(private _httpService : ShintoService) { }

  ngOnInit() {
    this.getAll();
  }
  ngOnChanges(){
    this.getAll();
  }
  getAll(){
    let obs = this._httpService.trans;
    this.all = obs;
  }

}
