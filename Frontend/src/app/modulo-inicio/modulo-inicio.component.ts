import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-modulo-inicio',
  templateUrl: './modulo-inicio.component.html',
  styleUrls: ['./modulo-inicio.component.css']
})
export class ModuloInicio {
  constructor(private router: Router) { }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
