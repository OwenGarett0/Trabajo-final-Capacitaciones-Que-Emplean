import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VGBSafe'

  constructor(private router: Router) { }

  goTo(route: string) {
    this.router.navigate([route])
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
  goToRegister() {
    this.router.navigate(['/register']);
  }
  goToInfo() {
    this.router.navigate(['/info'])
  }
  goToForum() {
    this.router.navigate(['/forum'])
  }
  goToStats() {
    this.router.navigate(['/stats'])
  }

}
