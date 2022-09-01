import { Component, OnInit } from '@angular/core';
import { personajes } from 'src/Model/Listado';
import { ServicesService } from '../servicios/services.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  personaje: personajes[] = [];

  constructor(private servicio: ServicesService) {}

  correo: string;
  contrasena: string;

  ngOnInit(){
    // this.servicio.obtenerPersonajes().subscribe(data => {

    //   this.personaje = data.results;

    //   console.log(this.personaje);

    // },error =>{console.log(error)})
  }

  LoginFirebase(){
    this.servicio.login(this.correo, this.contrasena).then((respuesta)=>{console.log(respuesta)}).catch(error => {alert("datos incorrectos")});
  }

}
