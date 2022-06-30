import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtenteService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:8091/api/noleggiatore"

  getNoleggiatori(){
    return this.http.get(this.url);
  }
}
