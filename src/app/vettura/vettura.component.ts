import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Vettura } from '../models/vettura';
import { VetturaService } from '../services/vettura.service';

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
    noleggiatoreId:['']
  });
  searchform: FormGroup = this.formBuilder.group({
    id: [''],
    marca: [''],
    modello: [''],
    alimentazione: [''],
    descrizione: [''],
    quantita: [''],
    noleggiatoreId:['']
  });
  

  alimentazione: any = { 
    BENZINA: '',
    DISEL:'',
    GPL:'',
    ELETTRICA:'',
    HYBRID:'',
  };

  vetture: any = [];
  id: number;
  update = false;
  index: Number;
  showForm = false;
  

  ngOnInit(): void {
    this.getVetture()
    this.form.patchValue({ noleggiatoreId: parseInt(localStorage.getItem('noleggiatoreId') || '',10), })
    // this.getVettureByNoleggiatore();
    // this.getVettureByNoleggiatore(this.form.value(this.noleggiatoreId))
  };

  // this.form.patchValue({ noleggiatoreId: parseInt(localStorage.getItem('noleggiatoreId') || '',10), })
//   
getVetture(){
  this.service.query({}).subscribe((response) => {
    this.vetture = response;
  });
}

  getVettureByNoleggiatore(noleggiatoreId : Number){
    this.service.query(noleggiatoreId).subscribe((res)=>{
      this.getVettureByNoleggiatore(this.form.value('noleggiatoreId'));
      this.vetture = res
    })
  }





getVettureById(id: Number){
  this.service.query().subscribe((response) => {
    this.vetture = response;
  });
}

switchForm(){
  this.showForm=true;
  this.update=false;
}

deleteVettura(id: Number) {
  this.service.delete(id).subscribe(() => {
    this.getVettureByNoleggiatore(this.form.value('noleggiatoreId'));
    alert('vettura eliminata con successo')
  });
}

modificaVettura(v: Vettura) {
  this.showForm = false;
  this.form.patchValue(v);
  this.update = true;
}

//crei form
//
//searchform
//query(this.searchform.value)
//if (vetture.length===0)
// <div class="alert alert-primary" role="alert">
//   This is a primary alert—check it out!
// </div>


updateVettura() {
  this.service.update(this.form.value).subscribe(() => {
    this.getVettureByNoleggiatore(this.form.value('noleggiatoreId'));
    alert('vettura modificata')
  });
  this.update = false;
}

keys(obj?: any) : Array<string> {
  return Object.keys(obj);
  }
}
