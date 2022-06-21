import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServizioService {

  constructor(private http:HttpClient) { }

  url = "http://localhost:8091/api/servizio"

  public get(){
    return this.http.get(this.url);
  }
}
