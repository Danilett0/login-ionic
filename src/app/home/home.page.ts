import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../servicio/services.service';
import {personajes} from '../Modelo/listado/Listado';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  personajes: personajes[] = [];

  email: string;
  pass:string;

  constructor(private servicio: ServicesService) {}

  ngOnInit(): void {
    // this.servicio.personajes().subscribe(data =>{
      

    //   this.personajes = data.results;
    //   console.log(this.personajes);
    // }, error=>{
    //   console.log(error);
    // })
  }

  loguearse(){
   this.servicio.login(this.email, this.pass).then((respuesta)=>{
    console.log(respuesta)
   }).catch((error)=>{
    alert("error de datos" + error)
   })
  }
}
