import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Contratto } from '../models/contratto';
import { ServizioService } from '../servizi/servizio.service';
import { ContrattoService } from './contratto.service';

@Component({
  selector: 'app-contratto',
  templateUrl: './contratto.component.html',
  styleUrls: ['./contratto.component.css']
})
export class ContrattoComponent implements OnInit {

  contratti: any = [];
  servizi: any =[];
  id: number;
  update = false;
  index: Number;
  showForm = false;

  // filters = {
  //   costoMensile: '',
  //   titoloContratto: '',
  //   descrizioneContratto: '',
  //   durataMax: '',
  //   durataMin: ''
  // }

  constructor(private service: ContrattoService,
              private formBuilder: FormBuilder,
              private servizioService: ServizioService,
              private route: Router
    ) {}
  
    validatore = Validators.required;
    form: FormGroup = this.formBuilder.group({
      id: [''],
      costoMensile: ['', this.validatore],
      titoloContratto: ['', this.validatore],
      descrizioneContratto: ['', this.validatore],
      durataMax: ['', [this.validatore, Validators.min(24)]],
      durataMin: ['', [this.validatore, Validators.min(12)]],
      servizi:['',this.validatore],
  });

  formFilter: FormGroup = this.formBuilder.group({
    costoMensile: [''],
    titoloContratto: [''],
    descrizioneContratto: [''],
    durataMax: [''],
    durataMin: ['']
  })

  ngOnInit(): void {
    this.getContratti();
    this.getServizi();
    };

  getContratti(){
    this.service.postContratti(this.formFilter.value).subscribe(response =>{
      this.contratti=response;
    });
  }

  // listaContratti(tipoFiltro: any){
  //   this.contratti = this.filterContratti(this.contratti, tipoFiltro)
  // }

// filterContratti(contratti: any, tipoFiltro: TipoFiltro){
//   return contratti.filter((c: any) => {
//     return c[tipoFiltro].toLowerCase().includes(this.filters[tipoFiltro].toLowerCase());
//   })
// }

  switchForm(){
    this.showForm=true;
    this.update=false;
  }


  deleteContratto(id: Number) {
    this.service.deleteContratto(id).subscribe(() => {
      this.getContratti();
      alert('contratto eliminato con successo')
    });
  }

  modificaContratto(c: any) {
    this.showForm = false;
    this.form.patchValue(c);
    this.update = true;
  }

  updateContratto() {
    this.service.updateContratto(this.form.value).subscribe(() => {
      this.getContratti();
      alert('contratto modificato')
    });
    this.update = false;
}

getServizi() {
  this.servizioService.getServizi().subscribe(response => {
    this.servizi = response;
  });
}

onContrattoSelected(c: Contratto){
  localStorage.setItem("contratto", c.id.toString())
}

}


function c(c: any) {
  throw new Error('Function not implemented.');
}
// enum TipoFiltro {costoMensile = 'costoMensile', titoloContratto = 'titoloContratto', descrizioneContratto ='descrizioneContratto', durataMax ='durataMax', durataMin ='durataMin'}
