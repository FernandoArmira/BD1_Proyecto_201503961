import { Component, OnInit } from '@angular/core';

import { ProyectoService } from '../../services/proyecto.service';

@Component({
  selector: 'app-consulta19',
  templateUrl: './consulta19.component.html',
  styleUrls: ['./consulta19.component.css']
})
export class Consulta19Component implements OnInit {

  c19: any = [];

  constructor(private proyectoservice: ProyectoService) { }

  ngOnInit(): void {
    this.proyectoservice.getc19().subscribe(
      //res => console.log(res)
      res =>{ 
        this.c19 = res;
       },
      err => console.error(err)
    )
  }

}
