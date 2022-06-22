import { Component, OnInit } from '@angular/core';
import { ServizioService } from '../servizi/servizio.service';

@Component({
  selector: 'app-servizi-offerti',
  templateUrl: './servizi-offerti.component.html',
  styleUrls: ['./servizi-offerti.component.css'],
})
export class ServiziOffertiComponent implements OnInit {
  constructor(private service: ServizioService) {}

  servizi: any = [];

  ngOnInit(): void {
    this.service.getServizi().subscribe((response) => {
      this.servizi = response;
    });
  }
}
