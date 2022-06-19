import { Component, OnInit } from '@angular/core';

import { ProyectoService } from '../../services/proyecto.service';

@Component({
  selector: 'app-consulta3',
  templateUrl: './consulta3.component.html',
  styleUrls: ['./consulta3.component.css']
})
export class Consulta3Component implements OnInit {

  c3: any = [];

  constructor(private proyectoservice: ProyectoService) { }

  ngOnInit(): void {
    this.proyectoservice.getc3().subscribe(
      //res => console.log(res)
      res =>{ 
        this.c3 = res;
       },
      err => console.error(err)
    )
  }
}
