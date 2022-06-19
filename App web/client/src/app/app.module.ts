import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FormComponent } from './components/form/form.component';
import { ViewComponent } from './components/view/view.component';

import { ProyectoService } from './services/proyecto.service';
import { Consulta1Component } from './components/consulta1/consulta1.component';
import { Consulta2Component } from './components/consulta2/consulta2.component';
import { Consulta3Component } from './components/consulta3/consulta3.component';
import { Consulta4Component } from './components/consulta4/consulta4.component';
import { Consulta5Component } from './components/consulta5/consulta5.component';
import { Consulta6Component } from './components/consulta6/consulta6.component';
import { Consulta7Component } from './components/consulta7/consulta7.component';
import { Consulta8Component } from './components/consulta8/consulta8.component';
import { Consulta9Component } from './components/consulta9/consulta9.component';
import { Consulta10Component } from './components/consulta10/consulta10.component';
import { Consulta11Component } from './components/consulta11/consulta11.component';
import { Consulta12Component } from './components/consulta12/consulta12.component';
import { Consulta13Component } from './components/consulta13/consulta13.component';
import { Consulta14Component } from './components/consulta14/consulta14.component';
import { Consulta15Component } from './components/consulta15/consulta15.component';
import { Consulta16Component } from './components/consulta16/consulta16.component';
import { Consulta17Component } from './components/consulta17/consulta17.component';
import { Consulta18Component } from './components/consulta18/consulta18.component';
import { Consulta19Component } from './components/consulta19/consulta19.component';
import { Consulta20Component } from './components/consulta20/consulta20.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FormComponent,
    ViewComponent,
    Consulta1Component,
    Consulta2Component,
    Consulta3Component,
    Consulta4Component,
    Consulta5Component,
    Consulta6Component,
    Consulta7Component,
    Consulta8Component,
    Consulta9Component,
    Consulta10Component,
    Consulta11Component,
    Consulta12Component,
    Consulta13Component,
    Consulta14Component,
    Consulta15Component,
    Consulta16Component,
    Consulta17Component,
    Consulta18Component,
    Consulta19Component,
    Consulta20Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ProyectoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
