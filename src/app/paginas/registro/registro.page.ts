import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ServicesService } from 'src/app/servicios/services.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})

export class RegistroPage implements OnInit {

  constructor(private service: ServicesService ,public formGroup: FormGroup, private formBuilder: FormBuilder) {

    this.formGroup = this.formBuilder.group({
      name: ['',[Validators.required] ],
      email: ['',[Validators.required] ],
      password: ['',[Validators.required] ]
    });

   }

  ngOnInit() {
  }

  registrarse(){
    const formulario = this.formGroup;
    if(formulario.valid){
      this.service.registro(
        formulario.get('correo').value,
        formulario.get('contrasena').value,
        formulario.get('telefono').value,
        formulario.get('fehcaNacimiento').value,
        formulario.get('nombreCompleto').value
      )
    }
  }

}
