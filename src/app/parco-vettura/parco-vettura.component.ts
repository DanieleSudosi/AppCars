import { Component, OnInit } from '@angular/core';
import { VetturaService } from '../vettura/vettura.service';

@Component({
  selector: 'app-parco-vettura',
  templateUrl: './parco-vettura.component.html',
  styleUrls: ['./parco-vettura.component.css']
})
export class ParcoVetturaComponent implements OnInit {

  constructor(private service: VetturaService) { }

  vetture: any = [];

  ngOnInit(): void {
    this.service.getVetture().subscribe(response =>{
      this.vetture=response;
    });
  }

}
