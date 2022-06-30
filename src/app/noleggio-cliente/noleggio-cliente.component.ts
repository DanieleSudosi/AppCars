import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContrattoService } from '../contratto/contratto.service';
import { UtenteService } from '../contratto/utente.service';
import { VetturaService } from '../vettura/vettura.service';

@Component({
  selector: 'app-noleggio-cliente',
  templateUrl: './noleggio-cliente.component.html',
  styleUrls: ['./noleggio-cliente.component.css'],
})
export class NoleggioClienteComponent implements OnInit {
  constructor(
    private service: VetturaService,
    private service1: ContrattoService,
    private service2: UtenteService,
    private FormBuilder: FormBuilder
  ) {}

  validatore = Validators.required;
  form: FormGroup = this.FormBuilder.group({
    noleggiatoreId: [''],
    vetturaId: [''],
    contrattoId: [''],
    dataInizio: [''],
    dataReso: [''],
    clienteId: [''],
  });

  vetture: any = [];
  contratti: any = [];
  noleggiatori: any = [];

  ngOnInit(): void {
    this.getVetture();
    this.getContratti();
    this.getNoleggiatori();
  }
  public getVetture() {
    this.service.getVetture().subscribe((response) => {
      this.vetture = response;
    });
  }

  public getContratti() {
    this.service1.getContratti().subscribe((response) => {
      this.contratti = response;
    });
  }
  public getNoleggiatori() {
    this.service2.getNoleggiatori().subscribe((response) => {
      this.noleggiatori = response;
    });
  }
}
