import { Component, OnInit } from '@angular/core';

import { ProyectoService } from '../../services/proyecto.service';

@Component({
  selector: 'app-consulta6',
  templateUrl: './consulta6.component.html',
  styleUrls: ['./consulta6.component.css']
})
export class Consulta6Component implements OnInit {

  c6: any = [];

  constructor(private proyectoservice: ProyectoService) { }

  ngOnInit(): void {
    this.proyectoservice.getc6().subscribe(
      //res => console.log(res)
      res =>{ 
        this.c6 = res;
       },
      err => console.error(err)
    )
  }

}
