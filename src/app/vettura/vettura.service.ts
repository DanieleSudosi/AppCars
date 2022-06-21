import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VetturaService {

  constructor(private http:HttpClient) { }

  url = "http://localhost:8091/api/vettura"

  public get(){
    return this.http.get(this.url);
  }

  getVettura(id: Number) {
    return this.http.get(this.url + "/" + id);
  }

  deleteVettura(id: Number) {
    return this.http.request('delete', this.url, {body: id});
  }
  
}
