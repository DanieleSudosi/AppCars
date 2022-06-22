import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUpService } from './sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private service: SignUpService,
    private route: Router
  ) {}

  tipologia: any;
  validatore = Validators.required
  form: FormGroup = this.formBuilder.group({
    username: ['', this.validatore],
    password: ['',this.validatore],
    nome: ['',this.validatore],
    cognome: ['',this.validatore],
    codice: ['',this.validatore],
  });

  signup() {
    if (this.tipologia) {
      const tipo =
        this.tipologia === 'cliente'
          ? this.service.addCliente(this.form.value)
          : this.service.addNoleggiatore(this.form.value);
      tipo.subscribe({
        next: (res) => {
          this.route.navigate(['login']);
        },
        error: (res) => alert(res.error),
      });
    }
  }

  ngOnInit(): void {}

}
