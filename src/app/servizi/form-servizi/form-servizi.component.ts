import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServizioService } from '../../services/servizio.service';

@Component({
  selector: 'app-form-servizi',
  templateUrl: './form-servizi.component.html',
  styleUrls: ['./form-servizi.component.css']
})
export class FormServiziComponent implements OnInit {

  constructor(
    private service: ServizioService,
    private formBuilder: FormBuilder
  ) {}

  validatore = Validators.required;
  form: FormGroup = this.formBuilder.group({
    id: [''],
    nomeServizio: ['', this.validatore],
    descrizioneServizio: ['', this.validatore],
  });

  ngOnInit(): void {
  }

  addServizio() {
    this.service.insert(this.form.value).subscribe(() => {
      alert('Servizio creato con successo')
    });
   
  }
}
