import { Component, OnInit } from '@angular/core';

import { ProyectoService } from '../../services/proyecto.service';

@Component({
  selector: 'app-consulta13',
  templateUrl: './consulta13.component.html',
  styleUrls: ['./consulta13.component.css']
})
export class Consulta13Component implements OnInit {

  c13: any = [];

  constructor(private proyectoservice: ProyectoService) { }

  ngOnInit(): void {
    this.proyectoservice.getc13().subscribe(
      //res => console.log(res)
      res =>{ 
        this.c13 = res;
       },
      err => console.error(err)
    )
  }

}
