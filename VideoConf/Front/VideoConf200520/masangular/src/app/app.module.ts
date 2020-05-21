import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductosComponent } from './components/productos/productos.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { DetalleComponent } from './components/detalle/detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductosComponent,
    NosotrosComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  //usualmente los servicios se registran en providers
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
