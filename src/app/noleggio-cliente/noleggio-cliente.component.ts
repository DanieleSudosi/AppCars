import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContrattoService } from '../services/contratto.service';
import { UtenteService } from '../services/utente.service';
import { VetturaService } from '../services/vettura.service';
import { NoleggioService } from '../services/noleggio.service';
import { Vettura } from '../models/vettura';

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
    private service3: NoleggioService,
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

  //variabili
  dataInizio: any = new Date();
  dataReso: any = new Date();
  noleggi: any = [];

  liste: any = {
    vetturas: [],
    contrattos: [],
  };

  riepilogo: any = {
    vetturaId: null,
    contrattoId: null,
  };

  ngOnInit(): void {
    this.getVetture();
    this.getContratti();
    this.getNoleggi();
    this.loadFromLocalStorage();
    this.initializeDate();
    this.form.patchValue({ clienteId: parseInt(localStorage.getItem('clienteId') || '', 10), });
    this.form.patchValue({ noleggiatoreId: parseInt(localStorage.getItem('noleggiatoreId') || '',10), });
  }

  public getVetture() {
    this.service.query().subscribe((response) => {
      this.liste.vetturas = response;
    });
  }
  public getContratti() {
    this.service1.query().subscribe((response) => {
      this.liste.contrattos = response;
    });
  }

  public getNoleggi() {
    this.service3.query().subscribe((response) => {
      this.noleggi = response;
    });
  }

  sendTicket() {
    this.service3.insert(this.form.value).subscribe(() => {
      this.getNoleggi();
      alert('richiesta inviata');
    });
  }

  loadFromLocalStorage() {
    const vettura = localStorage.getItem('vettura');
    const contratto = localStorage.getItem('contratto');
    if (vettura) {
      this.form.patchValue({ vetturaId: parseInt(vettura, 10) });
    }
    if (contratto) {
      this.form.patchValue({ contrattoId: parseInt(contratto, 10) });
    }
  }

  initializeDate() {
    this.dataReso.setFullYear(this.dataReso.getFullYear() + 1);
    this.dataReso = this.dataReso.toISOString().split('T')[0];
    this.dataInizio = this.dataInizio.toISOString().split('T')[0];
    this.form.patchValue({
      dataInizio: this.dataInizio,
      dataReso: this.dataReso,
    });
  }

  // onVetturaSelected(v: any){
  //   localStorage.setItem("vettura", v.id.toString())
  //   localStorage.setItem("noleggiatoreId",v.noleggiatore.id.toString())
  // }

  onSwitch(field: string) {
    this.riepilogo[field] = this.liste[field.slice(0, -2) + 's'].filter(
      (x: any) => x.id === this.form.controls[field].value
         
    )[0];
  }

// onSetVetturaNoleggiatoreId(v:Vettura){
//     localStorage.setItem("vettura", v.id.toString())
//     localStorage.setItem("noleggiatoreId",v.noleggiatore.id.toString())
// }
}
