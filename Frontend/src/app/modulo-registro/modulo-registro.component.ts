import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modulo-registro',
  templateUrl: './modulo-registro.component.html',
  styleUrls: ['./modulo-registro.component.css']
})
export class ModuloRegistro {
  regerror: boolean = false;
  user: string = '';
  pass: string = '';
  email: string = '';
  passcom: string = '';
  constructor(private http: HttpClient, private router: Router) { }

  register() {
    const newUser = { usuarios: this.user, password: this.pass, email: this.email };
    this.http.post('/api/auth/register', newUser).subscribe(() => this.router.navigate(['/login']));

  }
  validarFormulario(){
    var nombre = this.user;
    var correo = this.email;
    var contraseña = this.pass;
    var confirmarContraseña = this.passcom;

    if (nombre.trim() === "" || correo.trim() === "" || contraseña.trim() === "" || confirmarContraseña.trim() === "") {
        this.regerror = true;
        }

     if (contraseña !== confirmarContraseña) {
        this.regerror = true;
        }


        this.register();
        }

  }



