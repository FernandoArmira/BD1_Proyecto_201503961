import { Component, OnInit} from '@angular/core';
import { pais } from 'src/app/models/pais';
import { ActivatedRoute,Router } from '@angular/router';

import { ProyectoService } from '../../services/proyecto.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  pais: pais ={
    nombre: '',
    poblacion: '',
    area: '',
    capital: '',
    region_idregion: ''
  };

  edit: boolean = false;
  id: string = '';

  constructor(private proyectoservice: ProyectoService, private router: Router, private activatedroute: ActivatedRoute) { }

  

  ngOnInit(): void { 

    const params = this.activatedroute.snapshot.params;
    console.log(params);
    this.id = params.id;
    if (params.id){
      this.proyectoservice.getpais(params.id).subscribe(
        res =>{
          console.log(res);
          this.pais = res;
          this.edit = true;
          console.log(this.pais.nombre)
        },
        err => console.error(err)
      )
    }
  }

  addpais(){
    //delete this.pais.area
    //console.log(this.pais)
    this.proyectoservice.addpais(this.pais).subscribe(
      res =>{
        console.log(res);
        this.pais.nombre = "";
        this.pais.poblacion = "";
        this.pais.area = "";
        this.pais.capital = "";
        this.pais.region_idregion = "";
        //this.router.navigate(['/pais']);
      },
      err => console.error(err)
    )
  };

  updatepais(){
    console.log(this.pais);
    console.log(this.id);
    this.proyectoservice.updatepais(this.id, this.pais).subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    )
  }

}
