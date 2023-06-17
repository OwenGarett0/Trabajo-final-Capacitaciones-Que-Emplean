import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  template: '<div> <input [(ngModel)]="username" placeholder="Nombre de usuario" /><input [(ngModel)]="password" type="password" placeholder="Contraseña" /> <button (click)="login()">Iniciar sesión</button></div>',
})
export class ModuloLogin {
  username: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) { }

  login() {
    const user = { username: this.username, password: this.password };
    this.http.post('/api/auth/login', user).subscribe(response => {
      console.log('Logueado:', response);
      this.router.navigate(['/']);//Redirección [MODIFICAR]
    }, error => {
      console.error(error);
    });
  }
}
