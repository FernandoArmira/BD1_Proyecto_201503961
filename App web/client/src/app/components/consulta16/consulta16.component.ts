import { Component, OnInit } from '@angular/core';

import { ProyectoService } from '../../services/proyecto.service';

@Component({
  selector: 'app-consulta16',
  templateUrl: './consulta16.component.html',
  styleUrls: ['./consulta16.component.css']
})
export class Consulta16Component implements OnInit {

  c16: any = [];

  constructor(private proyectoservice: ProyectoService) { }

  ngOnInit(): void {
    this.proyectoservice.getc16().subscribe(
      //res => console.log(res)
      res =>{ 
        this.c16 = res;
       },
      err => console.error(err)
    )
  }

}
