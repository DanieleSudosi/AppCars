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

  ngOnInit(): void {
  }

  addVettura() {
    this.service.addVettura(this.form.value).subscribe(() => {
      alert('Vettura creata con successo')
    });
  }
}
