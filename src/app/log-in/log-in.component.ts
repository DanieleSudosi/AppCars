import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UtenteDTO } from '../models/utenteDTO';
import { LogInService } from './log-in.service';

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
    this.service.LoginUtente(this.form.value).subscribe({
      next: (res) => {
        this.route.navigate(["contnol"])
        localStorage.clear();
        localStorage.setItem("utente",res)
  
      },
      error: (res) => alert(res.error),
    });
  }
  // }

  // if(utente.admin) {
  //   this.router.navigate(["appuntamenti"]);
  // } else {
  //   localStorage.clear();
  //   localStorage.setItem("id", "" + utente.id)
  //   this.router.navigate(["home"]);
  // }

  ngOnInit(): void {}
}
