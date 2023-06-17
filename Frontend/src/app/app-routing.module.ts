import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuloRegistro } from './modulo-registro/modulo-registro.component';
import { ModuloLogin } from './modulo-login/modulo-login.component';
import { ModuloInicio } from './modulo-inicio/modulo-inicio.component'

const routes: Routes = [
  { path: '', component: ModuloInicio},
  { path: 'login', component: ModuloLogin},
  { path: 'register', component: ModuloRegistro }
  
  ];

export const AppRoutingModule = RouterModule.forRoot(routes);
