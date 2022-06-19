import { Component, OnInit } from '@angular/core';

import { ProyectoService } from '../../services/proyecto.service';

@Component({
  selector: 'app-consulta2',
  templateUrl: './consulta2.component.html',
  styleUrls: ['./consulta2.component.css']
})
export class Consulta2Component implements OnInit {

  c2: any = [];

  constructor(private proyectoservice: ProyectoService) { }

  ngOnInit(): void {
    this.proyectoservice.getc2().subscribe(
      //res => console.log(res)
      res =>{ 
        this.c2 = res;
       },
      err => console.error(err)
    )
  }


}
