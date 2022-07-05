import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Noleggio } from '../models/noleggio';

@Injectable({
  providedIn: 'root'
})
export class NoleggioService {

  constructor(private http:HttpClient) { }

  url = "http://localhost:8091/api/noleggio"

  addNoleggio(n: any) {
    return this.http.post(this.url, n);
  }

  getNoleggi(){
    return this.http.get(this.url);
  }

  getNoleggio(id: Number) {
    return this.http.get(this.url + "/" + id);
  }

  updateNoleggio(n: Noleggio) {
    return this.http.put(this.url, n);
  }

  deleteNoleggio(id: Number) {
    return this.http.request('delete', `${this.url}/${id}`);
  }
}
