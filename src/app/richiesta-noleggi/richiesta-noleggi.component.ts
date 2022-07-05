import { Component, OnInit } from '@angular/core';
import { Noleggio } from '../models/noleggio';
import { NoleggioService } from '../noleggio-cliente/noleggio.service';


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

  ngOnInit(): void {
    this.getNoleggiInAttesa();
  }

  public getNoleggiInAttesa() {
    this.service.getNoleggiByStato('IN_ATTESA').subscribe((response) => {
      this.noleggi = response;
    });
  }

  public modificaStato(n: Noleggio, stato:string){
    this.service.updateNoleggioByStato(n,stato).subscribe(()=>{
      this.getNoleggiInAttesa();
      alert(`noleggio ${stato==='APPROVATO'?"approvato": "respinto" } con successo`)
    })
  }

}
