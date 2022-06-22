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
    nomeServizio: ['', this.validatore],
    descrizioneServizio: ['', this.validatore],
  });

  id: number;
  update = false;
  index: Number;
  servizi: any = [];

  ngOnInit(): void {}

  getServizi() {
    this.service.getServizi().subscribe((response) => {
      this.servizi = response;
    });
  }

  deleteServizio(id: Number) {
    this.service.deleteServizio(id).subscribe(() => {
      this.getServizi();
    });
  }

  // showUpdate(id: number, index: number) {
  //   this.id = id;
  //   this.index = index;
  //   this.form.get('nomeServizio')!.setValue(this.servizi[index].nomeServizio);
  //   this.form.get('descrizioneServizio')!.setValue(this.servizi[index].descrizioneServizio);
  //   this.update = true;
  // }

  updateServizio() {
    let newServizio: Servizio = {
      id: this.id,
      nomeServizio: this.form.get('nomeServizio')!.value,
      descrizioneServizio: this.form.get('descrizioneServizio')!.value,
    };
    this.service.updateServizio(newServizio).subscribe(() => {
      this.getServizi();
    });
    this.update = false;
  }
}
