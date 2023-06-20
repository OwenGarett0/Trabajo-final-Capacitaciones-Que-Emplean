import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { ModuloAuth } from '../modulo-auth.service';

@Component({
  selector: 'app-login',
  templateUrl:'./modulo-login.component.html',
  styleUrls: ['./modulo-login.component.css']
})
export class ModuloLogin {
  user: string = '';
  pass: string = '';
  email: string = '';

  constructor(private http: HttpClient, private router: Router, private ModuloAuth: ModuloAuth) { }

  login() {
    const Usuarios = { usuarios: this.user, pass: this.pass};
    this.http.post('https://localhost:7223/api/auth/login', Usuarios).subscribe(response => {
      console.log('Logueado:', response);
      this.ModuloAuth.login();
      this.router.navigate(['/info']);//Redirección [MODIFICAR]
    },
      error => {
      console.error(error);
    });
  }
}
