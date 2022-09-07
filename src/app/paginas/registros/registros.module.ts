import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrosPageRoutingModule } from './registros-routing.module';

import { RegistrosPage } from './registros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrosPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RegistrosPage]
})
export class RegistrosPageModule {}
