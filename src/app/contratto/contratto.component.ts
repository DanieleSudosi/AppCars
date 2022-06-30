import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  constructor(private service: ContrattoService,
              private formBuilder: FormBuilder,
              private servizioService: ServizioService
    ) {}
  
    validatore = Validators.required;
    form: FormGroup = this.formBuilder.group({
      id: [''],
      costoMensile: ['', this.validatore],
      titoloContratto: ['', this.validatore],
      descrizioneContratto: ['', this.validatore],
      durataMax: ['', this.validatore],
      durataMin: ['', [this.validatore, Validators.min(12)]],
      servizi:['',this.validatore],
  });

  ngOnInit(): void {
    this.getContratti();
    this.getServizi();
    };

  getContratti(){
    this.service.getContratti().subscribe(response =>{
      this.contratti=response;
    });
  }

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
}
