import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Noleggio } from '../models/noleggio';
import { BaseCrudService } from './base-crud.service';

@Injectable({
  providedIn: 'root'
})
export class NoleggioService extends BaseCrudService {

  override url = "http://localhost:8091/api/noleggio"

}
