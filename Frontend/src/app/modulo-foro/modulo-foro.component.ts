import { Component } from '@angular/core';
import { ModuloAuth } from '../modulo-auth.service';

@Component({
  selector: 'app-modulo-foro',
  templateUrl: './modulo-foro.component.html',
  styleUrls: ['./modulo-foro.component.css']
})
export class ModuloForo {
  constructor(private auth: ModuloAuth) { }
}
