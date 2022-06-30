import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContrattoService } from '../contratto/contratto.service';
import { UtenteService } from '../contratto/utente.service';
import { VetturaService } from '../vettura/vettura.service';

@Component({
  selector: 'app-noleggio-cliente',
  templateUrl: './noleggio-cliente.component.html',
  styleUrls: ['./noleggio-cliente.component.css']
})
export class NoleggioClienteComponent implements OnInit {

  constructor(private service: VetturaService,
    private service1: ContrattoService,
    private service2: UtenteService, 
    private FormBuilder: FormBuilder
    ) {}
  
    validatore = Validators.required;
    form: FormGroup = this.FormBuilder.group({
      id: [''],
      marca: [''],
      modello: [''],
      alimentazione: [''],
      descrizione: [''],
      quantita: [''],
      // immagine: [''],
    });

  vetture: any = [];
  contratti: any = [];
  noleggiatori: any = [];
  
  
  ngOnInit(): void {
    this.service.getVetture().subscribe(response =>{
      this.vetture=response;
    });
    this.service1.getContratti().subscribe(response=>{
      this.contratti=response;
    })
    this.service2.getNoleggiatori().subscribe(response=>{
      this.noleggiatori=response;
    })
  }

}
