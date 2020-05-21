import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductosComponent } from './components/productos/productos.component';
import {NosotrosComponent} from './components/nosotros/nosotros.component';
import {DetalleComponent} from './components/detalle/detalle.component';

const routes: Routes = [
  //{path:'ruta',component:ComponenteImportado}
  {path:'',component:ProductosComponent},
  {path:'nosotros',component:NosotrosComponent},
  {path:'detalle/:id',component:DetalleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
