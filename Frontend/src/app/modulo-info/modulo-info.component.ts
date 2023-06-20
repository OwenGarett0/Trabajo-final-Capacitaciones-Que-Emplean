import { Component } from '@angular/core';
import { ModuloAuth } from '../modulo-auth.service';

@Component({
  selector: 'app-modulo-info',
  templateUrl: './modulo-info.component.html',
  styleUrls: ['./modulo-info.component.css']
})
export class ModuloInfo {
  constructor(private auth: ModuloAuth) { }
}
