import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modulo-registro',
  templateUrl: './modulo-registro.component.html',
  styleUrls: ['./modulo-registro.component.css']
})
export class ModuloRegistro {
  user: string = '';
  pass: string = '';
  email: string = '';
  constructor(private http: HttpClient) { }

  register() {
    const newUser = { usuarios: this.user, password: this.pass, email: this.email };
    this.http.post('/api/auth/register', newUser).subscribe(() => {

    });
  }
}

