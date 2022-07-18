import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contratto } from '../models/contratto';

@Injectable({
  providedIn: 'root'
})
export class ContrattoService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:8091/api/contratto"

  getContratti(){
    return this.http.get(this.url);
  }

  postContratti(c: Contratto){
    return this.http.post(this.url + "/filter", c);
  }

  getContratto(id: Number){
    return this.http.get(this.url + "/" + id);
  }

  addContratto(c: Contratto) {
    return this.http.post(this.url, c);
  }
  updateContratto(c: Contratto) {
    return this.http.put(this.url, c);
  }

  deleteContratto(id: Number) {
    return this.http.request('delete', `${this.url}/${id}`);
  }

}
