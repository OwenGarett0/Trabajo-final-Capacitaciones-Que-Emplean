import { Component } from '@angular/core';
import { ModuloAuth } from '../modulo-auth.service';

@Component({
  selector: 'app-modulo-estadistica',
  templateUrl: './modulo-estadistica.component.html',
  styleUrls: ['./modulo-estadistica.component.css']
})
export class ModuloEstadistica {
  constructor(private auth: ModuloAuth) { }
}
