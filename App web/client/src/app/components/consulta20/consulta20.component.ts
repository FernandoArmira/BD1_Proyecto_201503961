import { Component, OnInit } from '@angular/core';

import { ProyectoService } from '../../services/proyecto.service';

@Component({
  selector: 'app-consulta20',
  templateUrl: './consulta20.component.html',
  styleUrls: ['./consulta20.component.css']
})
export class Consulta20Component implements OnInit {

  c20: any = [];

  constructor(private proyectoservice: ProyectoService) { }

  ngOnInit(): void {
    this.proyectoservice.getc20().subscribe(
      //res => console.log(res)
      res =>{ 
        this.c20 = res;
       },
      err => console.error(err)
    )
  }

}
