import { Component, OnInit } from '@angular/core';
import { Vettura } from '../models/vettura';
import { VetturaService } from '../vettura/vettura.service';

@Component({
  selector: 'app-parco-vettura',
  templateUrl: './parco-vettura.component.html',
  styleUrls: ['./parco-vettura.component.css']
})
export class ParcoVetturaComponent implements OnInit {

  constructor(private service: VetturaService) { }

  vetture: any = [];

  filters = {
    marca: '',
    modello: '',
    alimentazione: ''
  }

  ngOnInit(): void {
    this.getVetture();
  }

  getVetture(){
  this.service.getVetture().subscribe(response =>{
    this.vetture = response;
  });
}

cerca() {
Object.keys(TipoFiltro).forEach(filter => {
  this.listaVetture(filter);
});
}
pulisci() {
  this.filters = {
    marca: '',
    modello: '',
    alimentazione: ''
  }
  this.getVetture();
}

  listaVetture(tipoFiltro: any){
    this.vetture = this.filterVetture(this.vetture, tipoFiltro)

}

  
  filterVetture(vetture: any, tipoFiltro: TipoFiltro){
    return vetture.filter((v: any) => {
      return v[tipoFiltro].toLowerCase().includes(this.filters[tipoFiltro].toLowerCase());
    })
  }

}

enum TipoFiltro {marca = 'marca', modello = 'modello', alimentazione ='alimentazione'}
