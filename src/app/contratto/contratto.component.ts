import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contratto } from '../models/contratto';
import { ServizioService } from '../services/servizio.service';
import { ContrattoService } from '../services/contratto.service';

@Component({
  selector: 'app-contratto',
  templateUrl: './contratto.component.html',
  styleUrls: ['./contratto.component.css'],
})
export class ContrattoComponent implements OnInit {
  contratti: any = [];
  servizi: any = [];
  id: number;
  update = false;
  index: Number;
  showForm = false;

  constructor(
    private service: ContrattoService,
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
    servizi: ['', this.validatore],
  });

  formSearch: FormGroup = this.formBuilder.group({
    costoMensile: [''],
    titoloContratto: [''],
    descrizioneContratto: [''],
    durataMax: [''],
    durataMin: [''],
    servizi: [''],
  });

  ngOnInit(): void {
    this.getContratti();
    this.getServizi();
  }

  getContratti() {
    this.service.query(this.formSearch.value).subscribe((response: any) => {
      this.contratti = response;
    });
  }
  getServizi() {
    this.servizioService.query({}).subscribe((response) => {
      this.servizi = response;
    });
  }

  switchForm() {
    this.showForm = true;
    this.update = false;
  }

  deleteContratto(id: Number) {
    this.service.delete(id).subscribe(() => {
      this.getContratti();
      alert('contratto eliminato con successo');
    });
  }

  modificaContratto(c: any) {
    this.showForm = false;
    this.form.patchValue(c);
    this.update = true;
  }

  updateContratto() {
    this.service.update(this.form.value).subscribe(() => {
      this.getContratti();
      alert('contratto modificato');
    });
    this.update = false;
  }

  onContrattoSelected(c: Contratto) {
    localStorage.setItem('contratto', c.id.toString());
  }
}
