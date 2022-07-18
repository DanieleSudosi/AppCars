import { Injectable } from '@angular/core';
import { UtenteRegistrazioneDTO } from '../models/utenteRegistrazioneDTO';
import { BaseCrudService } from './base-crud.service';

@Injectable({
  providedIn: 'root'
})
export class SignUpService extends BaseCrudService {
 override url = "http://localhost:8091/api"

  public addCliente(u: UtenteRegistrazioneDTO){
    return this.http.post(this.url + "/utente-cliente",u);
  }

  public addNoleggiatore(u: UtenteRegistrazioneDTO){
    return this.http.post(this.url + "/utente-noleggiatore",u);
  }
}
