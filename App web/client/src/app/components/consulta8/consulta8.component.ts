import { Component, OnInit } from '@angular/core';

import { ProyectoService } from '../../services/proyecto.service';

@Component({
  selector: 'app-consulta8',
  templateUrl: './consulta8.component.html',
  styleUrls: ['./consulta8.component.css']
})
export class Consulta8Component implements OnInit {

  c8: any = [];

  constructor(private proyectoservice: ProyectoService) { }

  ngOnInit(): void {
    this.proyectoservice.getc8().subscribe(
      //res => console.log(res)
      res =>{ 
        this.c8 = res;
       },
      err => console.error(err)
    )
  }

}
