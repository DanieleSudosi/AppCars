import { Component, OnInit } from '@angular/core';
import { ContrattoService } from '../contratto/contratto.service';

@Component({
  selector: 'app-contratto-cliente',
  templateUrl: './contratto-cliente.component.html',
  styleUrls: ['./contratto-cliente.component.css']
})
export class ContrattoClienteComponent implements OnInit {

  contratti: any = []
  constructor(private service: ContrattoService) { }

  ngOnInit(): void {
    this.service.get().subscribe(response =>{
      this.contratti=response;
    });
  }

}
