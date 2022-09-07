import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {AngularFirestore} from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  url = environment.url;

  constructor(private http: HttpClient, private AngFire: AngularFireAuth, private bd:AngularFirestore) {}


  login(correo: string, contrasena: string){

    return new Promise((resolve, rejects) => {
      this.AngFire.signInWithEmailAndPassword(correo, contrasena).then((usuario)=>{
        console.log(usuario)
        resolve(usuario)
      }).catch( (error) => { rejects(error) } )
    })
  };


  registro(correo: string, contrasena: string, telefono: string, fehcaNacimiento: string, nombreCompleto: string){
    return new Promise((resolve, rejects) => {
      this.AngFire.signInWithEmailAndPassword(correo, contrasena).then((usuario)=>{
        console.log(usuario)
        const id = usuario.uid;
        this.bd.collection('/Usuarios').doc(id).set({
          telefono: telefono,
          fehcaNacimiento: fehcaNacimiento,
          nombreCompleto: nombreCompleto,
          uuid: id
        })
        resolve(usuario)
      }).catch( (error) => { rejects(error) } )
    })

  };

}
