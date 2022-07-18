import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VetturaService } from '../../services/vettura.service';

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
    noleggiatoreId:['']
  });

  alimentazione: any = { 
    BENZINA: '',
    DISEL:'',
    GPL:'',
    ELETTRICA:'',
    HYBRID:'',
  };

  ngOnInit(): void {
    this.form.patchValue({ noleggiatoreId: parseInt(localStorage.getItem('noleggiatoreId') || '',10), });
  }

  addVettura() {
    this.service.insert(this.form.value).subscribe(() => {
      alert('Vettura creata con successo')
    });
  }

  keys(obj?: any) : Array<string> {
    return Object.keys(obj);
    }
}
