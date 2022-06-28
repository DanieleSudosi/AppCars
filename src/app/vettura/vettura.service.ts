import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vettura } from '../models/vettura';

@Injectable({
  providedIn: 'root'
})
export class VetturaService {

  constructor(private http:HttpClient) { }

  url = "http://localhost:8091/api/vettura"

  public getVetture(){
    return this.http.get(this.url);
  }

  getVettura(id: Number) {
    return this.http.get(this.url + "/" + id);
  }

  addVettura(v: Vettura) {
    return this.http.post(this.url, v);
  }


  updateVettura(v: Vettura) {
    return this.http.put(this.url, v);
  }

  deleteVettura(id: Number) {
    return this.http.request('delete', `${this.url}/${id}`);
  }
}
