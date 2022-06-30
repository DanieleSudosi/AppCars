import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContrattoService } from '../contratto/contratto.service';
import { Contratto } from '../models/contratto';

@Component({
  selector: 'app-contratto-cliente',
  templateUrl: './contratto-cliente.component.html',
  styleUrls: ['./contratto-cliente.component.css']
})
export class ContrattoClienteComponent implements OnInit {

  contratti: any = []
  constructor(private service: ContrattoService,
              private route: Router) { }

  ngOnInit(): void {
    this.service.getContratti().subscribe(response =>{
      this.contratti=response;
    });
  }
  onContrattoSelected(c: Contratto){
    localStorage.setItem("contratto", c.id.toString())
    this.route.navigate(["nolcli"])
  }
}
