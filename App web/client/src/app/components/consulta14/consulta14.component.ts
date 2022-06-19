import { Component, OnInit } from '@angular/core';

import { ProyectoService } from '../../services/proyecto.service';

@Component({
  selector: 'app-consulta14',
  templateUrl: './consulta14.component.html',
  styleUrls: ['./consulta14.component.css']
})
export class Consulta14Component implements OnInit {

  c14: any = [];

  constructor(private proyectoservice: ProyectoService) { }

  ngOnInit(): void {
    this.proyectoservice.getc14().subscribe(
      //res => console.log(res)
      res =>{ 
        this.c14 = res;
       },
      err => console.error(err)
    )
  }

}
