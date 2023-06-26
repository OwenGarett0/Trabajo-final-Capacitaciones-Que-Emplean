import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ModuloRegistro } from './modulo-registro/modulo-registro.component';
import { ModuloLogin } from './modulo-login/modulo-login.component';
import { ModuloInicio } from './modulo-inicio/modulo-inicio.component';
import { ModuloInfo } from './modulo-info/modulo-info.component';
import { ModuloEstadistica } from './modulo-estadistica/modulo-estadistica.component';
import { ModuloForo } from './modulo-foro/modulo-foro.component'; import { ModuloHilo } from './modulo-foro/modulo-hilo/modulo-hilo.component'; import { ModuloListaHilos } from './modulo-foro/modulo-lista-hilos/modulo-lista-hilos.component';

import { AuthGuard } from './auth-guard.guard';
import { NewPost } from './modulo-foro/new-post/new-post.component';

const routes: Routes = [
  { path: '', component: ModuloInicio},
  { path: 'login', component: ModuloLogin},
  { path: 'register', component: ModuloRegistro },
  { path: 'info', component: ModuloInfo, canActivate: [AuthGuard] },
  {
    path: 'forum', component: ModuloForo, children: [
      { path: 'a', component: ModuloListaHilos }, { path: 'hilo/:id', component: ModuloHilo }, { path: 'create', component: NewPost }
  ]},
  { path: 'stats', component: ModuloEstadistica, canActivate: [AuthGuard] }

  
  ];

export const AppRoutingModule = RouterModule.forRoot(routes);
