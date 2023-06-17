import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModuloLogin } from './modulo-login/modulo-login.component';
import { ModuloRegistro } from './modulo-registro/modulo-registro.component';
import { FormsModule } from '@angular/forms';
import { ModuloInicio } from './modulo-inicio/modulo-inicio.component';


@NgModule({
  declarations: [
    AppComponent,
    ModuloLogin,
    ModuloRegistro,
    ModuloInicio
  ],
  imports: [
    HttpClientModule,   
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
