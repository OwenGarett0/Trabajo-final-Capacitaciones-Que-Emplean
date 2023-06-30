import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StatsService } from './stats.service'
@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VGBSafe'

  constructor(private router: Router, private stats: StatsService) { }

  goTo(route: string) {
    this.router.navigate([route])
  }


  Forovisitas(): void {
    this.stats.Forovisitas().subscribe(
      () => {
        console.log('ok');
      },
      (error) => {
        console.error(error);
      }
)}
  Loginvisitas() {
    this.stats.Loginvisitas().subscribe(
      () => {
        console.log('ok');
      },
      (error) => {
        console.error(error);
      })
  }
  Registervisitas() {
    this.stats.Registervisitas().subscribe(
      () => {
        console.log('ok');
      },
      (error) => {
        console.error(error);
      }
    );
  }
  Aboutusvisitas() {
    this.stats.Aboutusvisitas().subscribe(
      () => {
        console.log('ok');
      },
      (error) => {
        console.error(error);
      }
    );
  }
  Statsvisitas() {
    this.stats.Statsvisitas().subscribe(
      () => {
        console.log('ok');
      },
      (error) => {
        console.error(error);
      }
    )
  }


}
