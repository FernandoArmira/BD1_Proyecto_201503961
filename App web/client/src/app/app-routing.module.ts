import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewComponent } from './components/view/view.component';
import { FormComponent} from './components/form/form.component'
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


const routes: Routes = [
  {
    path: '',
    redirectTo: '/pais',
    pathMatch: 'full'
  },
  {
    path: 'pais',
    component: ViewComponent
  },
  {
    path: 'pais/add',
    component: FormComponent
  },
  {
    path: 'pais/edit/:id',
    component: FormComponent
  },
  {
    path: 'consulta1',
    component: Consulta1Component
  },
  {
    path: 'consulta2',
    component: Consulta2Component
  },
  {
    path: 'consulta3',
    component: Consulta3Component
  },
  {
    path: 'consulta4',
    component: Consulta4Component
  },
  {
    path: 'consulta5',
    component: Consulta5Component
  },
  {
    path: 'consulta6',
    component: Consulta6Component
  },
  {
    path: 'consulta7',
    component: Consulta7Component
  },
  {
    path: 'consulta8',
    component: Consulta8Component
  },
  {
    path: 'consulta9',
    component: Consulta9Component
  },
  {
    path: 'consulta10',
    component: Consulta10Component
  },
  {
    path: 'consulta11',
    component: Consulta11Component
  },
  {
    path: 'consulta12',
    component: Consulta12Component
  },
  {
    path: 'consulta13',
    component: Consulta13Component
  },
  {
    path: 'consulta14',
    component: Consulta14Component
  },
  {
    path: 'consulta15',
    component: Consulta15Component
  },
  {
    path: 'consulta16',
    component: Consulta16Component
  },
  {
    path: 'consulta17',
    component: Consulta17Component
  },
  {
    path: 'consulta18',
    component: Consulta18Component
  },
  {
    path: 'consulta19',
    component: Consulta19Component
  },
  {
    path: 'consulta20',
    component: Consulta20Component
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
