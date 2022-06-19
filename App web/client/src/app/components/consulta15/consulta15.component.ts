import { Component, OnInit } from '@angular/core';

import { ProyectoService } from '../../services/proyecto.service';

@Component({
  selector: 'app-consulta15',
  templateUrl: './consulta15.component.html',
  styleUrls: ['./consulta15.component.css']
})
export class Consulta15Component implements OnInit {

  c15: any = [];

  constructor(private proyectoservice: ProyectoService) { }

  ngOnInit(): void {
    this.proyectoservice.getc15().subscribe(
      //res => console.log(res)
      res =>{ 
        this.c15 = res;
       },
      err => console.error(err)
    )
  }
}
