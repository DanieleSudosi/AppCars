import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UtenteDTO } from '../models/utenteDTO';

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  constructor(private http:HttpClient) { }

  url = "http://localhost:8091/api/login"

  LoginUtente(u: UtenteDTO) {
    return this.http.post(this.url, u);
  }

}
