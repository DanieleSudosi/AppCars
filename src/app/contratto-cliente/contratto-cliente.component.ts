import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContrattoService } from '../contratto/contratto.service';
import { Contratto } from '../models/contratto';

@Component({
  selector: 'app-contratto-cliente',
  templateUrl: './contratto-cliente.component.html',
  styleUrls: ['./contratto-cliente.component.css']
})
export class ContrattoClienteComponent implements OnInit {

  contratti: any = []
  
  filters = {
    costoMensile: '',
    titoloContratto: '',
    descrizioneContratto: '',
    durataMax: '',
    durataMin: ''
  }

  constructor(private service: ContrattoService,
              private route: Router) { }

  ngOnInit(): void {
    this.service.getContratti().subscribe(response =>{
      this.contratti=response;
    });
  }
  getContratti(){
    this.service.getContratti().subscribe(response =>{
      this.contratti=response;
    });
  }

  cerca() {
    Object.keys(TipoFiltro).forEach(filter => {
      this.listaContratti(filter);
    });
    }
    
    pulisci() {
      this.filters = {
        costoMensile: '',
        titoloContratto: '',
        descrizioneContratto: '',
        durataMax: '',
        durataMin: ''
      }
      this.getContratti();
    }

  listaContratti(tipoFiltro: any){
    this.contratti = this.filterContratti(this.contratti, tipoFiltro)

}

filterContratti(contratti: any, tipoFiltro: TipoFiltro){
  return contratti.filter((v: any) => {
    return v[tipoFiltro].toLowerCase().includes(this.filters[tipoFiltro].toLowerCase());
  })
}

  onContrattoSelected(c: Contratto){
    localStorage.setItem("contratto", c.id.toString())
    this.route.navigate(["nolcli"])
  }
}

enum TipoFiltro {costoMensile = 'costoMensile', titoloContratto = 'titoloContratto', descrizioneContratto ='descrizioneContratto', durataMax ='durataMax', durataMin ='durataMin'}

