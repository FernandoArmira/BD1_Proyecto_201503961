import { Component, OnInit } from '@angular/core';

import { ProyectoService } from '../../services/proyecto.service';

@Component({
  selector: 'app-consulta17',
  templateUrl: './consulta17.component.html',
  styleUrls: ['./consulta17.component.css']
})
export class Consulta17Component implements OnInit {

  c17: any = [];

  constructor(private proyectoservice: ProyectoService) { }

  ngOnInit(): void {
    this.proyectoservice.getc17().subscribe(
      //res => console.log(res)
      res =>{ 
        this.c17 = res;
       },
      err => console.error(err)
    )
  }

}
