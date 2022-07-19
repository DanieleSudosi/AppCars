import { Component, OnInit } from '@angular/core';
import { Noleggio } from '../models/noleggio';
import { Vettura } from '../models/vettura';
import { NoleggioService } from '../services/noleggio.service';


@Component({
  selector: 'app-richiesta-noleggi',
  templateUrl: './richiesta-noleggi.component.html',
  styleUrls: ['./richiesta-noleggi.component.css']
})
export class RichiestaNoleggiComponent implements OnInit {

  constructor(
    private service: NoleggioService,
  ) {}

  noleggi: any = [];
  vetture:any = [];

  ngOnInit(): void {
    this.getNoleggiInAttesa();
  }

  public getNoleggiInAttesa() {
    this.service.query({stato:'IN_ATTESA'}).subscribe((response) => {
      this.noleggi = response;
    });
  }

  public modificaStatoQuantita(n: Noleggio, stato:string){
    this.service.queryParam(n,stato).subscribe(()=>{
      this.getNoleggiInAttesa();
      
      alert(`noleggio ${stato==='APPROVATO'?"approvato": "respinto" } con successo`)
    })
  }

}
