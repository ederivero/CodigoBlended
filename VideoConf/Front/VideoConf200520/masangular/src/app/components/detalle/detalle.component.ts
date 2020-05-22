import { Component, OnInit } from '@angular/core';
import { ProductosService} from '../../services/productos.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
    selector:'app-detalle',
    templateUrl: './detalle.component.html',
    styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit{
    constructor(private _sProductos: ProductosService,private route:ActivatedRoute){}

    suscripcion: Subscription;

    producto:any;

    ngOnInit(){
        this.route.params.subscribe((parametros:Params) => {
            let id = parametros.id;
            this.suscripcion = this._sProductos.getUnicoProducto(id).subscribe(prodRecibido => {
                console.log(prodRecibido)
                this.producto =  JSON.stringify(prodRecibido);
            })
        })
    }
}