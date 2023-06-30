import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModuloLogin } from './modulo-login/modulo-login.component';
import { ModuloRegistro } from './modulo-registro/modulo-registro.component';
import { FormsModule } from '@angular/forms';
import { ModuloInicio } from './modulo-inicio/modulo-inicio.component';
import { ModuloInfo } from './modulo-info/modulo-info.component';
import { ModuloForo } from './modulo-foro/modulo-foro.component';
import { ModuloEstadistica } from './modulo-estadistica/modulo-estadistica.component';
import { ModuloHilo } from './modulo-foro/modulo-hilo/modulo-hilo.component';
import { ModuloListaHilos } from './modulo-foro/modulo-lista-hilos/modulo-lista-hilos.component';
import { NewPost } from './modulo-foro/new-post/new-post.component';
import { ModuloNewpass } from './modulo-newpass/modulo-newpass.component';
import { KeyValuePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    ModuloLogin,
    ModuloRegistro,
    ModuloInicio,
    ModuloInfo,
    ModuloForo,
    ModuloEstadistica,
    ModuloHilo,
    ModuloListaHilos,
    NewPost,
    ModuloNewpass,

  ],
  imports: [
    HttpClientModule,   
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    KeyValuePipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
