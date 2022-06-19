import { Component, OnInit } from '@angular/core';

import { ProyectoService } from '../../services/proyecto.service';

@Component({
  selector: 'app-consulta5',
  templateUrl: './consulta5.component.html',
  styleUrls: ['./consulta5.component.css']
})
export class Consulta5Component implements OnInit {

  c5: any = [];

  constructor(private proyectoservice: ProyectoService) { }

  ngOnInit(): void {
    this.proyectoservice.getc5().subscribe(
      //res => console.log(res)
      res =>{ 
        this.c5 = res;
       },
      err => console.error(err)
    )
  }

}
