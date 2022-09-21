import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  datosCliente:string ;

  constructor() { }

  ngOnInit() {

   let InformacionUsuario = JSON.parse(localStorage.getItem('Datos'))
   let {user} = InformacionUsuario;

    this.datosCliente = InformacionUsuario

    console.log(">>", this.datosCliente)

  }

}
