import { Component, OnInit } from '@angular/core';

import { ProyectoService } from '../../services/proyecto.service';

@Component({
  selector: 'app-consulta7',
  templateUrl: './consulta7.component.html',
  styleUrls: ['./consulta7.component.css']
})
export class Consulta7Component implements OnInit {

  c7: any = [];

  constructor(private proyectoservice: ProyectoService) { }

  ngOnInit(): void {
    this.proyectoservice.getc7().subscribe(
      //res => console.log(res)
      res =>{ 
        this.c7 = res;
       },
      err => console.error(err)
    )
  }
}
