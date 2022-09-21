import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { firebaseConfig } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { MsalModule, MsalService, MSAL_INSTANCE } from '@azure/msal-angular';
import { IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';

export function MSALInstanceFactory(): IPublicClientApplication{
  return new PublicClientApplication({
    auth: {clientId: 'b2ef3da7-a0cb-4a81-9250-3914e32df15d', redirectUri: 'http://localhost:4200/home'}
  })
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireModule,
    FormsModule,
    ReactiveFormsModule,
    MsalModule
      ],
  providers: [{provide: RouteReuseStrategy, useClass: IonicRouteStrategy},{ provide: MSAL_INSTANCE, useFactory: MSALInstanceFactory }, MsalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
