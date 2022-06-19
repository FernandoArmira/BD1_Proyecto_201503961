import { Component, OnInit } from '@angular/core';

import { ProyectoService } from '../../services/proyecto.service';

@Component({
  selector: 'app-consulta18',
  templateUrl: './consulta18.component.html',
  styleUrls: ['./consulta18.component.css']
})
export class Consulta18Component implements OnInit {

  c18: any = [];

  constructor(private proyectoservice: ProyectoService) { }

  ngOnInit(): void {
    this.proyectoservice.getc18().subscribe(
      //res => console.log(res)
      res =>{ 
        this.c18 = res;
       },
      err => console.error(err)
    )
  }

}
