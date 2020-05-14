import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  titulo:string = "Hola Código :D !!!!!!!";
  verdadero:boolean = false;

  cambiar(){
    this.verdadero = true;
  }
}
