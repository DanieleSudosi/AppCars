import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VetturaService } from '../vettura.service';

@Component({
  selector: 'app-form-vetture',
  templateUrl: './form-vetture.component.html',
  styleUrls: ['./form-vetture.component.css']
})

export class FormVettureComponent implements OnInit {

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
    // img: [''],
  });

  liste: any ={
    alimentaziones: []
  };

  riepilogo: any = {
    alimentazioni: null
  };

  ngOnInit(): void {
    this.liste.alimentaziones=Object.keys(Alimentazione)
  }

  addVettura() {
    this.service.addVettura(this.form.value).subscribe(() => {
      alert('Vettura creata con successo')
    });
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
