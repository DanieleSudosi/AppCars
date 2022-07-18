import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Vettura } from '../models/vettura';
import { VetturaService } from '../services/vettura.service';

@Component({
  selector: 'app-parco-vettura',
  templateUrl: './parco-vettura.component.html',
  styleUrls: ['./parco-vettura.component.css']
})
export class ParcoVetturaComponent implements OnInit {

  constructor(private service: VetturaService,
    private route: Router,
    private formBuilder: FormBuilder) { }

    searchform: FormGroup = this.formBuilder.group({
      id: [''],
      marca: [''],
      modello: [''],
      alimentazione: null
    });

  vetture: any = [];
  vetturaId:any ;
  noleggiatoreId: any;
  // lista: any[];

  alimentazione: any = { 
    BENZINA: '',
    DISEL:'',
    GPL:'',
    ELETTRICA:'',
    HYBRID:'',
  };

  ngOnInit(): void {
    this.getVettureFilter();
  }

  // getVetture() {
  //   this.service.query().subscribe((response) => {
  //     this.vetture = response;
  //   });
  // }

  getVettureFilter() {
    this.service.query(this.searchform.value).subscribe((response) => {
      this.vetture = response;
    });
  }
keys(obj?: any) : Array<string> {
  return Object.keys(obj);
  }

  onVetturaSelected(v: Vettura){
    localStorage.setItem("vettura", v.id.toString())
    localStorage.setItem("noleggiatoreId",v.noleggiatore.id.toString())
    this.route.navigate(["contcli"])
  }

}
enum Alimentazione {
  BENZINA = 'BENZIN',
  DISEL = 'DISEL',
  GPL = 'GPL',
  ELETTRICA = 'ELETTRICA',
  HYBRID = 'HYBRID',
  }
