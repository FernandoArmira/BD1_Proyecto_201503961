import { Component, OnInit } from '@angular/core';

import { ProyectoService } from '../../services/proyecto.service';

@Component({
  selector: 'app-consulta9',
  templateUrl: './consulta9.component.html',
  styleUrls: ['./consulta9.component.css']
})
export class Consulta9Component implements OnInit {

  c9: any = [];

  constructor(private proyectoservice: ProyectoService) { }

  ngOnInit(): void {
    this.proyectoservice.getc9().subscribe(
      //res => console.log(res)
      res =>{ 
        this.c9 = res;
       },
      err => console.error(err)
    )
  }

}
