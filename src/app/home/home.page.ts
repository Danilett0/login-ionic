import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../servicio/services.service';
import {personajes} from '../Modelo/listado/Listado';
import { Router } from '@angular/router';
import { MsalModule, MsalService, MSAL_INSTANCE } from '@azure/msal-angular';
import { IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';

export function MSALInstanceFactory(): IPublicClientApplication{
  return new PublicClientApplication({
    auth: {clientId: 'b2ef3da7-a0cb-4a81-9250-3914e32df15d', redirectUri: 'http://localhost:4200/home'}
  })
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage implements OnInit {

  

  personajes: personajes[] = [];

  email: string;
  pass:string;

  constructor(private servicio: ServicesService, private router: Router) {}

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
  

  loguearseConGoogle(){
    this.servicio.loginWithGoogle().then((data)=>{
      console.log(data.user.multiFactor);
      localStorage.setItem('Datos', JSON.stringify(data.user.multiFactor))
      this.router.navigate(['/principal']);
    },error=>{console.log(error)});
  }

  datosCliente:any [] = [];

  loginWithMicrosoft(){
   let hola = this.servicio.loginWithMicrosoft()
  
   let InformacionUsuario = JSON.parse(localStorage.getItem('Datos'))
   let {username} = InformacionUsuario;

    this.datosCliente = Object.values({username})

    console.log(">>", InformacionUsuario)

    this.router.navigate(['/principal']);

  }

}
