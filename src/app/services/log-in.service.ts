import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UtenteDTO } from '../models/utenteDTO';
import { BaseCrudService } from './base-crud.service';

@Injectable({
  providedIn: 'root'
})
export class LogInService extends BaseCrudService{

override  url = "http://localhost:8091/api/login"

  // LoginUtente(u: UtenteDTO) {
  //   return this.http.post(this.url, u);
  // }

}
