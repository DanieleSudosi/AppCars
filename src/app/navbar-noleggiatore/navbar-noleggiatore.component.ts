import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-noleggiatore',
  templateUrl: './navbar-noleggiatore.component.html',
  styleUrls: ['./navbar-noleggiatore.component.css']
})
export class NavbarNoleggiatoreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  clear(){
    localStorage.clear()
  }
}
