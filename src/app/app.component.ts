import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  {

  // tipologia = localStorage.getItem("utente")
  public get tipologia(){
    return localStorage.getItem("utente")
  }
  title = 'AppCars';
}
