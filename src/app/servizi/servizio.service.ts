import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Servizio } from '../models/servizio';

@Injectable({
  providedIn: 'root'
})
export class ServizioService {

  constructor(private http:HttpClient) { }

  url = "http://localhost:8091/api/servizio"

  addServizio(s: Servizio) {
    return this.http.post(this.url, s);
  }

  getServizi(){
    return this.http.get(this.url);
  }

  getServizio(id: Number) {
    return this.http.get(this.url + "/" + id);
  }

  updateServizio(s: Servizio) {
    return this.http.put(this.url, s);
  }

  deleteServizio(id: Number) {
    return this.http.request('delete', this.url, {body: id});
  }
}
