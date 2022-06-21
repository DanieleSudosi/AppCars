import { Component, OnInit } from '@angular/core';
import { VetturaService } from './vettura.service';

@Component({
  selector: 'app-vettura',
  templateUrl: './vettura.component.html',
  styleUrls: ['./vettura.component.css']
})
export class VetturaComponent implements OnInit {

  constructor(private service: VetturaService) { }

  vetture: any = [];

  ngOnInit(): void {


    this.service.get().subscribe(response =>{
      this.vetture=response;
      
    });
  }

}
