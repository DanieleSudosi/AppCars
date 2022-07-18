import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServizioService } from 'src/app/servizi/servizio.service';
import { ContrattoService } from '../contratto.service';

@Component({
  selector: 'app-form-contratto',
  templateUrl: './form-contratto.component.html',
  styleUrls: ['./form-contratto.component.css']
})
export class FormContrattoComponent implements OnInit {

  servizi: any = [];

  constructor(private service: ContrattoService, 
              private servizioService: ServizioService,
            private formBuilder: FormBuilder
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

  ngOnInit(): void {
    this.getServizi();
  }

  getServizi() {
    this.servizioService.getServizi().subscribe(response => {
      this.servizi = response;
    });
  }
  
  saveContratti(){
    this.service.addContratto(this.form.value).subscribe(() => {
      alert('Contratto creato con successo')
    });

  }
}

