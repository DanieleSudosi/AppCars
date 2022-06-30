import { Component, OnInit } from '@angular/core';
import { ContrattoService } from '../contratto/contratto.service';
import { VetturaService } from '../vettura/vettura.service';

@Component({
  selector: 'app-noleggio-cliente',
  templateUrl: './noleggio-cliente.component.html',
  styleUrls: ['./noleggio-cliente.component.css']
})
export class NoleggioClienteComponent implements OnInit {

  constructor(private service: VetturaService,
    private service1: ContrattoService) { }

  vetture: any = [];
  contratti: any = [];
  
  ngOnInit(): void {
    this.service.getVetture().subscribe(response =>{
      this.vetture=response;
    });
    this.service1.getContratti().subscribe(response=>{
      this.contratti=response;
    })
  }

}
