import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ModuloAuth } from './modulo-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: ModuloAuth , private router: Router) { }

  canActivate(): boolean {
    if (this.authService.logged()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
