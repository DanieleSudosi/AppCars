import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-validazione',
  templateUrl: './validazione.component.html',
  styleUrls: ['./validazione.component.css']
})
export class ValidazioneComponent implements OnInit {

  constructor() { }

  @Input() control:any

  ngOnInit(): void {
  }

  

}
