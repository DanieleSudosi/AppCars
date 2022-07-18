import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UtenteDTO } from '../models/utenteDTO';
import { LogInService } from '../services/log-in.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private service: LogInService,
    private route: Router
  ) {}

  form: FormGroup = this.formBuilder.group({
    username: [''],
    password: [''],
  });

  login() {
    this.service.insert(this.form.value).subscribe({
      next: (res: any) => {
        localStorage.clear();
        localStorage.setItem('utente', res['tipologia']);
        if (res['tipologia'] === 'NOLEGGIATORE') {
          this.route.navigate(['contnol']);
          localStorage.setItem('noleggiatoreId', res['id']);
        } else {
          this.route.navigate(['contcli']);
          localStorage.setItem('clienteId', res['id']);
          if (res.carta) {
            localStorage.setItem('carta', res['carta']);
          }
        }
      },
      error: (res) => alert(res.error.messaggio),
    });
  }
  ngOnInit(): void {}
}
