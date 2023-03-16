import 'zone.js';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { PrimeiraPaginaComponent } from './primeira-pagina/primeira-pagina.component';
import { BrowserModule, platformBrowser } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  imports: [CommonModule, AppRoutingModule, BrowserModule],
  providers: [],
  declarations: [PrimeiraPaginaComponent, AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
