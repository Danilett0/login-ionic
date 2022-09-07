import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { SrvRecord } from 'dns';
import { ServicesService } from 'src/app/servicio/services.service';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.page.html',
  styleUrls: ['./registros.page.scss'],
})
export class RegistrosPage implements OnInit {

  form: FormGroup
  constructor( private servicio: ServicesService,  private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required]],
      tel: ['', [Validators.required]],
      fnacimiento: ['', [Validators.required]]
    });
  }

  ngOnInit() {}
  registro() {
   
    const formulario= this.form;
    // console.log(formulario);
    if(formulario.valid){
      this.servicio.registro(
      formulario.get('email').value,
      formulario.get('pass').value,
      formulario.get('tel').value,
      formulario.get('fnacimiento').value,
      formulario.get('nombre').value
      ).then ((respuesta) => {
        console.log(respuesta);
        alert("registro exitoso");
      }).catch ((error) =>{
        console.log(error)
      })
      
    }
    
  }
}
