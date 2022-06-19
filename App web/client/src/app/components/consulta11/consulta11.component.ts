import { Component, OnInit } from '@angular/core';

import { ProyectoService } from '../../services/proyecto.service';

@Component({
  selector: 'app-consulta11',
  templateUrl: './consulta11.component.html',
  styleUrls: ['./consulta11.component.css']
})
export class Consulta11Component implements OnInit {

  c11: any = [];

  constructor(private proyectoservice: ProyectoService) { }

  ngOnInit(): void {
    this.proyectoservice.getc11().subscribe(
      //res => console.log(res)
      res =>{ 
        this.c11 = res;
       },
      err => console.error(err)
    )
  }
}
