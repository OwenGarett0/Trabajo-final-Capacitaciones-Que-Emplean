import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { ModuloAuth } from '../modulo-auth.service';
import { StatsService } from '../stats.service';

@Component({
  selector: 'app-login',
  templateUrl:'./modulo-login.component.html',
  styleUrls: ['./modulo-login.component.css']
})
export class ModuloLogin {
  loginFail: boolean = false;
  user: string = '';
  pass: string = '';

  constructor(private http: HttpClient, private router: Router, private ModuloAuth: ModuloAuth, private stats: StatsService) { }

  cantidadLogueos() {
    this.stats.cantidadLogueos().subscribe(
      () => {
        console.log('ok');
      },
      (error) => {
        console.error(error);
      }
    );
  }

  login() {
    const Usuarios = { user: this.user, pass: this.pass};
    this.http.post('https://localhost:7223/api/auth/login', Usuarios).subscribe(response => {
      console.log('Logueado:', response);
      this.cantidadLogueos()
      this.ModuloAuth.login();
      this.router.navigate(['/info']);//Redirección [MODIFICAR]
    },
      error => {
      this.loginFail = true;
    });
  }
  goRegister() {
    this.router.navigate(['/register'])
  }
}
