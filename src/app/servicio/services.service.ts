import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import { GoogleAuthProvider } from "firebase/auth";
import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-browser';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  constructor(private http: HttpClient, private AngFire: AngularFireAuth,private db: AngularFirestore,private msalService: MsalService) {}

  login(email: string, pass: string) {
    return new Promise((resolve, rejects) => {
      this.AngFire.signInWithEmailAndPassword(email, pass)
        .then((usuario) => {
          console.log(usuario);

          resolve(usuario);
        })
        .catch((error) => {
          rejects(error);
        });
    });
  }
  registro(
    email: string,
    pass: string,
    tel: string,
    fnacimiento: string,
    nombre: string
  ) {
    return new Promise((resolve, rejects) => {
      this.AngFire.createUserWithEmailAndPassword(email, pass)
        .then((usuario) => {
          console.log(usuario);
          const id = usuario.user.uid;
          this.db.collection('/Usuarios').doc(id).set({
            tel:tel,
            fnacimiento:fnacimiento,
            nombre:nombre
          })
          resolve(usuario);
        })
        .catch((error) => {
          rejects(error);
        });
    });
  }

  loginWithGoogle(){
    return this.AngFire.signInWithPopup(new GoogleAuthProvider());
  }

  loginWithMicrosoft(){
    return this.msalService.loginPopup().subscribe((response:AuthenticationResult)=>{
      this.msalService.instance.setActiveAccount(response.account)
      let data = response.account;
      console.log("Datos respuesta service >", data.username);
      localStorage.setItem('Datos', JSON.stringify(data.username))
    })
  }

}
