import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UtenteRegistrazioneDTO } from '../models/utenteRegistrazioneDTO';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private http:HttpClient) { }
 
  url = "http://localhost:8091/api"

  public addCliente(u: UtenteRegistrazioneDTO){
    return this.http.post(this.url + "/utente-cliente",u);
  }

  public addNoleggiatore(u: UtenteRegistrazioneDTO){
    return this.http.post(this.url + "/utente-noleggiatore",u);
  }
}
