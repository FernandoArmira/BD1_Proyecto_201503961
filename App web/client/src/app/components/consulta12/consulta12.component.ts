import { Component, OnInit } from '@angular/core';

import { ProyectoService } from '../../services/proyecto.service';

@Component({
  selector: 'app-consulta12',
  templateUrl: './consulta12.component.html',
  styleUrls: ['./consulta12.component.css']
})
export class Consulta12Component implements OnInit {

  c12: any = [];

  constructor(private proyectoservice: ProyectoService) { }

  ngOnInit(): void {
    this.proyectoservice.getc12().subscribe(
      //res => console.log(res)
      res =>{ 
        this.c12 = res;
       },
      err => console.error(err)
    )
  }
}
