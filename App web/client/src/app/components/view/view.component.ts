import { Component, OnInit } from '@angular/core';

import { ProyectoService } from '../../services/proyecto.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  pais: any = [];

  constructor(private proyectoservice: ProyectoService) { }

  ngOnInit(): void {
    this.viewpais();
    
  }

  viewpais(){
    this.proyectoservice.getpaises().subscribe(
      //res => console.log(res)
      res =>{ 
        this.pais = res;
       },
      err => console.error(err)
    )

  }

  deletepais(idpais: string){
    //console.log(idpais);
    this.proyectoservice.deletepais(idpais).subscribe(
      res =>{
        console.log(res)
        this.viewpais();
      },
      err => console.log(err)
    )
  }

}
