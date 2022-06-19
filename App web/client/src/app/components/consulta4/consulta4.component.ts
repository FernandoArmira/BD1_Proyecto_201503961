import { Component, OnInit } from '@angular/core';

import { ProyectoService } from '../../services/proyecto.service';

@Component({
  selector: 'app-consulta4',
  templateUrl: './consulta4.component.html',
  styleUrls: ['./consulta4.component.css']
})
export class Consulta4Component implements OnInit {

  c4: any = [];

  constructor(private proyectoservice: ProyectoService) { }

  ngOnInit(): void {
    this.proyectoservice.getc4().subscribe(
      //res => console.log(res)
      res =>{ 
        this.c4 = res;
       },
      err => console.error(err)
    )
  }

}
