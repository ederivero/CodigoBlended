import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  //inyeccion por dependencias, siempre se hace en el constructor
  constructor(private _Http: HttpClient) {}

   getProductos(): Observable<any>{
     return this._Http.get("https://5e22b9e7afee990014e59669.mockapi.io/productos");
   }

   getUnicoProducto(id:string): Observable<any>{
     return this._Http.get(`https://5e22b9e7afee990014e59669.mockapi.io/productos/${id}`);
    }

}
