import { Component, OnInit } from '@angular/core';

import { ProyectoService } from '../../services/proyecto.service';

@Component({
  selector: 'app-consulta10',
  templateUrl: './consulta10.component.html',
  styleUrls: ['./consulta10.component.css']
})
export class Consulta10Component implements OnInit {

  c10: any = [];

  constructor(private proyectoservice: ProyectoService) { }

  ngOnInit(): void {
    this.proyectoservice.getc10().subscribe(
      //res => console.log(res)
      res =>{ 
        this.c10 = res;
       },
      err => console.error(err)
    )
  }
}
