import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Servizio } from '../models/servizio';
import { ServizioService } from './servizio.service';

@Component({
  selector: 'app-servizi',
  templateUrl: './servizi.component.html',
  styleUrls: ['./servizi.component.css'],
})
export class ServiziComponent implements OnInit {
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

  id: number;
  update = false;
  index: Number;
  servizi: any = [];
  showForm = false;

  ngOnInit(): void {

    this.getServizi()
  }

  switchForm(){
    this.showForm=true;
    this.update=false;
  }

  getServizi() {
    this.service.getServizi().subscribe((response) => {
      this.servizi = response;
    });
  }

  deleteServizio(id: Number) {
    this.service.deleteServizio(id).subscribe(() => {
      this.getServizi();
      alert('servizio eliminato con successo')
    });
  }

  modificaServizio(s: Servizio) {
    this.showForm = false;
    this.form.patchValue(s);
    this.update = true;
  }

  updateServizio() {
    this.service.updateServizio(this.form.value).subscribe(() => {
      this.getServizi();
      alert('servizio modificato')
    });
    this.update = false;
  }

}
