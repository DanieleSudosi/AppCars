import { Component, OnInit } from '@angular/core';
import { VetturaService } from '../vettura/vettura.service';

@Component({
  selector: 'app-noleggio-cliente',
  templateUrl: './noleggio-cliente.component.html',
  styleUrls: ['./noleggio-cliente.component.css']
})
export class NoleggioClienteComponent implements OnInit {

  constructor(private service: VetturaService) { }

  vetture: any = [];
  
  ngOnInit(): void {
    this.service.getVetture().subscribe(response =>{
      this.vetture=response;
    });
  }

}
