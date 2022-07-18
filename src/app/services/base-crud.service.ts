import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BaseCrudService {
  constructor(protected http: HttpClient) {}

  //protected perchè lo devo estendere
  protected url: string;

  //any perchè generico
  public insert(objToInsert: any) {
    return this.http.post(this.url, objToInsert);
  }

  //se esiste lo metto se no metto l'oggetto vuoto
  // public query(objCriteria?: any) {
  //   return this.http.get(this.url, {
  //     params: new HttpParams().set(objCriteria objCriteria? objCriteria: {}),
  //   });
  // }

// QUERY CON POST
  public query(objCriteria?:any){
    return this.http.post(this.url+"/filter", objCriteria? objCriteria:{})
  }

  public queryParam(objCriteria?:any, param?:any){
    return this.http.put(this.url, objCriteria? objCriteria:{}, param)
  }

  // public query(objCriteria?:any){
  //   return this.http.get(this.url, objCriteria? objCriteria:{})
  // }

  public update(objToUpdate: any) {
    return this.http.put(this.url, objToUpdate);
  }

  public delete(idObjToDelete: Number) {
    return this.http.request('delete', `${this.url}/${idObjToDelete}`);
  }
}
