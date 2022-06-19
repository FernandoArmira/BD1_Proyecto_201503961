import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { pais } from '../models/pais';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  direccion = 'http://localhost:3000/';

  constructor(private http: HttpClient) {
    
   }
   getpaises(){
     //return this.http.get('${this.direccion}/crudpais');
     return this.http.get('http://localhost:3000/crudpais');
   }

   getpais(id: string){
    return this.http.get('http://localhost:3000/crudpais/' + id);
  }

  addpais(pais: pais){
    return this.http.post('http://localhost:3000/crudpais', pais);
  }

  deletepais(id: string){
    return this.http.delete('http://localhost:3000/crudpais/' + id);
  }

  updatepais(id: string, pais:pais): Observable<pais> {
    return this.http.put('http://localhost:3000/crudpais/'+ id ,pais);
  }

  getc1(){
    return this.http.get('http://localhost:3000/consultas/1');
  }
  getc2(){
    return this.http.get('http://localhost:3000/consultas/2');
  }
  getc3(){
    return this.http.get('http://localhost:3000/consultas/3');
  }
  getc4(){
    return this.http.get('http://localhost:3000/consultas/4');
  }
  getc5(){
    return this.http.get('http://localhost:3000/consultas/5');
  }
  getc6(){
    return this.http.get('http://localhost:3000/consultas/6');
  }
  getc7(){
    return this.http.get('http://localhost:3000/consultas/7');
  }
  getc8(){
    return this.http.get('http://localhost:3000/consultas/8');
  }
  getc9(){
    return this.http.get('http://localhost:3000/consultas/9');
  }
  getc10(){
    return this.http.get('http://localhost:3000/consultas/10');
  }
  getc11(){
    return this.http.get('http://localhost:3000/consultas/11');
  }
  getc12(){
    return this.http.get('http://localhost:3000/consultas/12');
  }
  getc13(){
    return this.http.get('http://localhost:3000/consultas/13');
  }
  getc14(){
    return this.http.get('http://localhost:3000/consultas/14');
  }
  getc15(){
    return this.http.get('http://localhost:3000/consultas/15');
  }
  getc16(){
    return this.http.get('http://localhost:3000/consultas/16');
  }
  getc17(){
    return this.http.get('http://localhost:3000/consultas/17');
  }
  getc18(){
    return this.http.get('http://localhost:3000/consultas/18');
  }
  getc19(){
    return this.http.get('http://localhost:3000/consultas/19');
  }
  getc20(){
    return this.http.get('http://localhost:3000/consultas/20');
  }
}
