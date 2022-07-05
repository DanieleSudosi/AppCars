import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContrattoService } from '../contratto/contratto.service';
import { UtenteService } from '../contratto/utente.service';
import { VetturaService } from '../vettura/vettura.service';
import { NoleggioService } from './noleggio.service';

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

  dataInizio: any =  new Date();
  dataReso: any =  new Date();
  vetture: any = [];
  contratti: any = [];
  noleggiatori: any = [];
  noleggi: any = [];

  ngOnInit(): void {
    this.getVetture();
    this.getContratti();
    this.getNoleggiatori();
    this.getNoleggi();
    this.loadFromLocalStorage();
    this.initializeDate();
    this.form.patchValue({clienteId:parseInt(localStorage.getItem('utenteId')||'',10)})
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
  public getNoleggi() {
    this.service3.getNoleggi().subscribe((response) => {
      this.noleggi = response;
    });
  }


sendTicket(){

  this.service3.addNoleggio(this.form.value).subscribe(() => {
    this.getNoleggi();
    alert('richiesta inviata')
  });
  
}

loadFromLocalStorage(){
  const vettura = localStorage.getItem('vettura')
  const contratto = localStorage.getItem('contratto')
  if(vettura){
    this.form.patchValue({vetturaId:parseInt(vettura,10)})
  }
  if(contratto){
    this.form.patchValue({contrattoId:parseInt(contratto,10)})
  }
}


initializeDate(){
  this.dataReso.setFullYear(this.dataReso.getFullYear()+1)
  this.dataReso = this.dataReso.toISOString().split('T')[0]
  this.dataInizio = this.dataInizio.toISOString().split('T')[0]
this.form.patchValue({dataInizio:this.dataInizio, dataReso:this.dataReso})
}

}


