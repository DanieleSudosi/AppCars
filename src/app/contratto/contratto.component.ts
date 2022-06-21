import { Component, OnInit } from '@angular/core';
import { ContrattoService } from './contratto.service';

@Component({
  selector: 'app-contratto',
  templateUrl: './contratto.component.html',
  styleUrls: ['./contratto.component.css']
})
export class ContrattoComponent implements OnInit {

  contratti: any = []
  constructor(private service: ContrattoService) { }

  ngOnInit(): void {
    this.service.get().subscribe(response =>{
      this.contratti=response;
    });
  }

}
