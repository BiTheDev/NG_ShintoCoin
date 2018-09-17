import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  current;
  constructor(private _httpService : ShintoService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.current = this._httpService.getTrans(params.id)
      console.log(this.current);
      
    });
  }

}
