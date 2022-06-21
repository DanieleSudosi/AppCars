import { Component, OnInit } from '@angular/core';
import { ServizioService } from './servizio.service';

@Component({
  selector: 'app-servizi',
  templateUrl: './servizi.component.html',
  styleUrls: ['./servizi.component.css'],
})
export class ServiziComponent implements OnInit {
  constructor(private service: ServizioService) {}

  servizi: any = [];

  ngOnInit(): void {
    this.service.get().subscribe((response) => {
      this.servizi = response;
    });
  }
}
