import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ModuloRegistro } from './modulo-registro/modulo-registro.component';
import { ModuloLogin } from './modulo-login/modulo-login.component';
import { ModuloInicio } from './modulo-inicio/modulo-inicio.component';
import { ModuloInfo } from './modulo-info/modulo-info.component';
import { ModuloForo } from './modulo-foro/modulo-foro.component';
import { ModuloEstadistica } from './modulo-estadistica/modulo-estadistica.component';

import { AuthGuard } from './auth-guard.guard';

const routes: Routes = [
  { path: '', component: ModuloInicio},
  { path: 'login', component: ModuloLogin},
  { path: 'register', component: ModuloRegistro },
  { path: 'info', component: ModuloInfo, canActivate: [AuthGuard] },
  { path: 'forum', component: ModuloForo, canActivate: [AuthGuard] },
  { path: 'stats', component: ModuloEstadistica, canActivate: [AuthGuard] }
  
  ];

export const AppRoutingModule = RouterModule.forRoot(routes);
