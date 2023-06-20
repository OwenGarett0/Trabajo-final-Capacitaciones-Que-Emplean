import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModuloAuth {
  private loggedBool: boolean = false;

  logged(): boolean {
    return this.loggedBool;
  }
  login() {
    this.loggedBool = true;
  }

  logout() {
    this.loggedBool = false;
  }
}
