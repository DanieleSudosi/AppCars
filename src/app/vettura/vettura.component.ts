import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Vettura } from '../models/vettura';
import { VetturaService } from './vettura.service';

@Component({
  selector: 'app-vettura',
  templateUrl: './vettura.component.html',
  styleUrls: ['./vettura.component.css'],
})
export class VetturaComponent implements OnInit {
  constructor(
    private service: VetturaService,
    private formBuilder: FormBuilder
  ) {}

  validatore = Validators.required;
  form: FormGroup = this.formBuilder.group({
    id: [''],
    marca: [''],
    modello: [''],
    alimentazione: [''],
    descrizione: [''],
    quantita: [''],
    // immagine: [''],
  });

  liste: any ={
    alimentaziones: []
  };

  riepilogo: any = {
    alimentazioni: null
  };


  vetture: any = [];
  id: number;
  update = false;
  index: Number;
  showForm = false;

  ngOnInit(): void {
    this.getVetture();
    this.liste.alimentaziones=Object.keys(Alimentazione);
  };

  getVetture(){
  this.service.getVetture().subscribe((response) => {
    this.vetture = response;
  });
}

switchForm(){
  this.showForm=true;
  this.update=false;
}

deleteVettura(id: Number) {
  this.service.deleteVettura(id).subscribe(() => {
    this.getVetture();
    alert('vettura eliminata con successo')
  });
}

modificaVettura(v: Vettura) {
  this.showForm = false;
  this.form.patchValue(v);
  this.update = true;
}

updateVettura() {
  this.service.updateVettura(this.form.value).subscribe(() => {
    this.getVetture();
    alert('vettura modificata')
  });
  this.update = false;
}

loadFromLocalStorage(){
  const alimentazione = localStorage.getItem('alimentazione')
  if(alimentazione){
    this.form.patchValue({vetturaId:parseInt(alimentazione,10)})
  }
}

onSwitch(field: string){
  this.riepilogo[field] = this.liste[field.slice(0,-2)+'s'].filter((x:any)=> x.id === this.form.controls[field].value)[0];
}
}

export enum Alimentazione {
  DISEL = "DISEL",
  BENZINA = "BENZINA",
  ELETTRICA = "ELETTRICA",
  GPL = "GPL",
  HYBRID = "HYBRID"
}
