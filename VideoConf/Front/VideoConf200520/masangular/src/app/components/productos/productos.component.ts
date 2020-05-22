import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit, OnDestroy {
  //TENEMOS QUE UTILIZAR EL CICLO DE VIDA PARA SUBSCRIBIRNOS A NUESTROS SERVICIOS
  constructor(private _sProductos:ProductosService) { }

  subscripcionProductos:Subscription;

  productos:any;

  ngOnInit(): void {
    this.subscripcionProductos = this._sProductos.getProductos().subscribe((misProductos)=>{
      console.log(misProductos);
      this.productos = misProductos;
    })
  }

  ngOnDestroy():void {
    this.subscripcionProductos.unsubscribe();
    console.log("destroooy")
  }

}
