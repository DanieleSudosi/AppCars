import { Injectable } from '@angular/core';
import { BaseCrudService } from './base-crud.service';

@Injectable({
  providedIn: 'root'
})
export class VetturaService extends BaseCrudService {

  override url = "http://localhost:8091/api/vettura"

}


