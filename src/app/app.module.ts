import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Component/login/login/login.component';
import { LoginFormComponent } from './Component/login/login-form/login-form.component';
import { EncabezadoComponent } from './Component/Reusable/encabezado/encabezado.component';
import { UsuarioRegistradoComponent } from './Component/login/usuario-registrado/usuario-registrado.component';
import { UsuarioNuevoComponent } from './Component/login/usuario-nuevo/usuario-nuevo.component';
import { InputFormsComponent } from './Component/Reusable/input-forms/input-forms.component';
import { BotonComponent } from './Component/Reusable/boton/boton.component';
import { FooterComponent } from './Component/Reusable/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginFormComponent,
    EncabezadoComponent,
    UsuarioRegistradoComponent,
    UsuarioNuevoComponent,
    InputFormsComponent,
    BotonComponent,
    FooterComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
